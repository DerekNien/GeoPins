import { gql } from 'apollo-server';

export default gql`
  type User {
    _id: ID
    name: String
    email: String
    picture: String
  }

  type Pin {
    _id: ID
    title: String
    content: String
    image: String
    latitude: Float
    longitude: Float
    auther: User
    comments: [Comment]
  }

  type Comment {
    text: String
    createdAt: String
    auther: User
  }

  type Query {
    me: User
  }
`
