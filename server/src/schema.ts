import gql from "graphql-tag";

export const typeDefs = gql`

type Query{
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track (id: ID!): Track
}

"A Track is a group pf modules that teaches about specific topic"
type Track{
id: ID!
title: String!
author: Author!
thumbnail: String
length: Int
modulesCount: Int
description: String
numberOfViews: Int
modules: [Module!]!
}

"Author of complete Track"
type Author{
id:ID!
name: String!
photo:String
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module {
id: ID!
title: String!
length: Int
}
`;