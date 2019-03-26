import { gql } from 'apollo-server';

export default gql`
  type User {
    _id: ID
    name: String
    email: String
    picture: String
  }

  type Query {
    me: User
  }
`
