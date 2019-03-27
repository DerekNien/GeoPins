import {
  ApolloServer
} from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import mongoose from 'mongoose';

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({
  url
}) => {
  console.log(`server listening on ${url}`);
});