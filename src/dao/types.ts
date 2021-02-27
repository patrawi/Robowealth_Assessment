export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  allItem: Array<Item>;
  Tobuy?: Maybe<Item>;
};

export type QueryTobuyArgs = {
  id: Scalars["ID"];
};

export type Mutation = {
  createItem: Item;
  deleteItem?: Maybe<Item>;
  updateItem?: Maybe<Item>;
};

export type MutationCreateItemArgs = {
  title: Scalars["String"];
  price: Scalars["Int"];
};

export type MutationDeleteItemArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateItemArgs = {
  id: Scalars["ID"];
  data: UpdateItemData;
};

export type UpdateItemData = {
  title: Scalars["String"];
  price: Scalars["Int"];
};

export type Item = {
  id: Scalars["ID"];
  title: Scalars["String"];
  price: Scalars["Int"];
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

import { ObjectID } from "mongodb";
export type ItemDbObject = {
  _id: ObjectID;
  title: string;
  price: number;
};
