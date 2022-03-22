/**
 * Get First Error message as string from graphql-request or @types/ApolloError
 * @param err : Error
 * @returns string
 */
export default function gqlErrorFirstMessage(err: Error, option?: {
    capitalize?: boolean;
}): String;
