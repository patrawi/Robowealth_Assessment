import { GraphQLResolveInfo } from "graphql";
import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  UpdateItemData: UpdateItemData;
  Item: ResolverTypeWrapper<Item>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars["ID"];
  Mutation: {};
  String: Scalars["String"];
  Int: Scalars["Int"];
  UpdateItemData: UpdateItemData;
  Item: Item;
  Boolean: Scalars["Boolean"];
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  allItem?: Resolver<Array<ResolversTypes["Item"]>, ParentType, ContextType>;
  Tobuy?: Resolver<
    Maybe<ResolversTypes["Item"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTobuyArgs, "id">
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createItem?: Resolver<
    ResolversTypes["Item"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemArgs, "title" | "price">
  >;
  deleteItem?: Resolver<
    Maybe<ResolversTypes["Item"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteItemArgs, "id">
  >;
  updateItem?: Resolver<
    Maybe<ResolversTypes["Item"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateItemArgs, "id" | "data">
  >;
};

export type ItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Item"] = ResolversParentTypes["Item"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type ItemQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ItemQuery = { Tobuy?: Maybe<Pick<Item, "id" | "title" | "price">> };

export type RemoveItemMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type RemoveItemMutation = { deleteItem?: Maybe<Pick<Item, "id">> };

export type EditItemMutationVariables = Exact<{
  id: Scalars["ID"];
  data: UpdateItemData;
}>;

export type EditItemMutation = {
  updateItem?: Maybe<Pick<Item, "title" | "price">>;
};

export type IndexQueryVariables = Exact<{ [key: string]: never }>;

export type IndexQuery = { allItem: Array<Pick<Item, "id">> };

export type CreateItemMutationVariables = Exact<{
  title: Scalars["String"];
  price: Scalars["Int"];
}>;

export type CreateItemMutation = { createItem: Pick<Item, "price" | "title"> };

export const ItemDocument = gql`
  query Item($id: ID!) {
    Tobuy(id: $id) {
      id
      title
      price
    }
  }
`;

/**
 * __useItemQuery__
 *
 * To run a query within a React component, call `useItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useItemQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<ItemQuery, ItemQueryVariables>
) {
  return ApolloReactHooks.useQuery<ItemQuery, ItemQueryVariables>(
    ItemDocument,
    baseOptions
  );
}
export function useItemLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ItemQuery,
    ItemQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ItemQuery, ItemQueryVariables>(
    ItemDocument,
    baseOptions
  );
}
export type ItemQueryHookResult = ReturnType<typeof useItemQuery>;
export type ItemLazyQueryHookResult = ReturnType<typeof useItemLazyQuery>;
export type ItemQueryResult = ApolloReactCommon.QueryResult<
  ItemQuery,
  ItemQueryVariables
>;
export const RemoveItemDocument = gql`
  mutation removeItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
export type RemoveItemMutationFn = ApolloReactCommon.MutationFunction<
  RemoveItemMutation,
  RemoveItemMutationVariables
>;

/**
 * __useRemoveItemMutation__
 *
 * To run a mutation, you first call `useRemoveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemMutation, { data, loading, error }] = useRemoveItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveItemMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveItemMutation,
    RemoveItemMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    RemoveItemMutation,
    RemoveItemMutationVariables
  >(RemoveItemDocument, baseOptions);
}
export type RemoveItemMutationHookResult = ReturnType<
  typeof useRemoveItemMutation
>;
export type RemoveItemMutationResult = ApolloReactCommon.MutationResult<RemoveItemMutation>;
export type RemoveItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveItemMutation,
  RemoveItemMutationVariables
>;
export const EditItemDocument = gql`
  mutation editItem($id: ID!, $data: UpdateItemData!) {
    updateItem(id: $id, data: $data) {
      title
      price
    }
  }
`;
export type EditItemMutationFn = ApolloReactCommon.MutationFunction<
  EditItemMutation,
  EditItemMutationVariables
>;

/**
 * __useEditItemMutation__
 *
 * To run a mutation, you first call `useEditItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editItemMutation, { data, loading, error }] = useEditItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditItemMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    EditItemMutation,
    EditItemMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    EditItemMutation,
    EditItemMutationVariables
  >(EditItemDocument, baseOptions);
}
export type EditItemMutationHookResult = ReturnType<typeof useEditItemMutation>;
export type EditItemMutationResult = ApolloReactCommon.MutationResult<EditItemMutation>;
export type EditItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditItemMutation,
  EditItemMutationVariables
>;
export const IndexDocument = gql`
  query Index {
    allItem {
      id
    }
  }
`;

/**
 * __useIndexQuery__
 *
 * To run a query within a React component, call `useIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    baseOptions
  );
}
export function useIndexLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    baseOptions
  );
}
export type IndexQueryHookResult = ReturnType<typeof useIndexQuery>;
export type IndexLazyQueryHookResult = ReturnType<typeof useIndexLazyQuery>;
export type IndexQueryResult = ApolloReactCommon.QueryResult<
  IndexQuery,
  IndexQueryVariables
>;
export const CreateItemDocument = gql`
  mutation createItem($title: String!, $price: Int!) {
    createItem(title: $title, price: $price) {
      price
      title
    }
  }
`;
export type CreateItemMutationFn = ApolloReactCommon.MutationFunction<
  CreateItemMutation,
  CreateItemMutationVariables
>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      title: // value for 'title'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateItemMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateItemMutation,
    CreateItemMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateItemMutation,
    CreateItemMutationVariables
  >(CreateItemDocument, baseOptions);
}
export type CreateItemMutationHookResult = ReturnType<
  typeof useCreateItemMutation
>;
export type CreateItemMutationResult = ApolloReactCommon.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateItemMutation,
  CreateItemMutationVariables
>;
