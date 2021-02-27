import { MongoClient, Db } from "mongodb";
export * from "./types";

export let client: MongoClient;
export let database: Db;
const url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const dbName = 'Grocery';
export const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${url}`);
    client = await MongoClient.connect(url);
    database = client.db(dbName);
  }

  return database;
};