import {GraphQLFileLoader, loadSchemaSync} from 'graphql-tools';
import {join} from 'path';

const typeDefs = loadSchemaSync(
    join(__dirname, './schema.gql'),
    { // load from a single schema file
      loaders: [
        new GraphQLFileLoader(),
      ],
    },
);

export default typeDefs;
