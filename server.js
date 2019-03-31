import {
  ApolloServer
} from 'apollo-server';
import mongoose from 'mongoose';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

import { findOrCreateUser } from './controllers/userController';

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;
    try {
      authToken = req.headers.authorization;
      if (authToken) {
         currentUser = await findOrCreateUser(authToken);
      }
    } catch (err) {
      console.error(`Unable to authenticate user with token ${authToken}`);
    }
    return { currentUser };
  }
});

server.listen().then(({
  url
}) => {
  console.log(`server listening on ${url}`);
});