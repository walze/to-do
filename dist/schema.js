"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _graphqltools = require('graphql-tools');
var _path = require('path');

const typeDefs = _graphqltools.loadSchemaSync.call(void 0, 
    _path.join.call(void 0, __dirname, './schema.gql'),
    { // load from a single schema file
      loaders: [
        new (0, _graphqltools.GraphQLFileLoader)(),
      ],
    },
);

exports. default = typeDefs;
