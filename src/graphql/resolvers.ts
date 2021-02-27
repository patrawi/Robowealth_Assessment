import { Resolvers, Item } from "./types";
import { connect } from "../dao";
import { ItemDbObject } from "../dao/types";
import { ObjectID } from "mongodb";

const dbPromise = connect();

const getCollection = async () => {
  const db = await dbPromise;
  return db.collection<ItemDbObject>("todos");
};

const fromDbObject = (dbObject: ItemDbObject): Item => ({
  id: dbObject._id.toHexString(),
  title: dbObject.title,
  price: dbObject.price,
});

const resolvers: Resolvers = {
  Query: {
    allItem: async () => {
      const collection = await getCollection();
      return await collection.find().map(fromDbObject).toArray();
    },
    Tobuy: async (_: any, {id}) => {
      const collection = await getCollection();
      const dbObject = await collection.findOne({
        _id: ObjectID.createFromHexString(id),
      });
      return fromDbObject(dbObject);
    },
  },
  Mutation: {
    createItem: async (_: any, { title, price }) => {
      const data: Omit<ItemDbObject, "_id"> = {
        price,
        title
      };

      const collection = await getCollection();
      const document = await collection.insertOne(data);
      return fromDbObject({
        ...data,
        _id: document.insertedId,
      });
    },
    deleteItem: async (_: any, { id }) => {
      const collection = await getCollection();
      const document = await collection.findOneAndDelete({
        _id: ObjectID.createFromHexString(id)
      });
      return null;
    },
    updateItem: async (_: any, {id , data}) => {
      const collection = await getCollection();
      const document = await collection.findOneAndUpdate({
        _id: ObjectID.createFromHexString(id)
      
      },
      {$set: data},
      {
        returnOriginal: false,
      }
      );
      return fromDbObject(document.value);
    }

  
  },
};

export default resolvers;

