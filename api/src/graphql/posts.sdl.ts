export const schema = gql`
  type Post {
    id: String!
    title: String!
    body: String!
    tags: [String]!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: String!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    tags: [String]!
  }

  input UpdatePostInput {
    title: String
    body: String
    tags: [String]!
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
