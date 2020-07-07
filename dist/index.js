"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('reflect-metadata');

var _schema = require('@graphql-tools/schema');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _expressgraphql = require('express-graphql'); var _expressgraphql2 = _interopRequireDefault(_expressgraphql);
var _schema3 = require('./schema'); var _schema4 = _interopRequireDefault(_schema3);



var _addUser = require('./resolvers/addUser');
var _addTodo = require('./resolvers/addTodo');
var _addTag = require('./resolvers/addTag');
var _User = require('./models/User');
var _useConnection = require('./helpers/useConnection');

const resolvers = {
  Query: {
    addUser: _addUser.addUser,
    addTodo: _addTodo.addTodo,
    addTag: _addTag.addTag,
    hello: () => _useConnection.useConnection.call(void 0, () => _User.User
        .findOne({where: {name: 'wivaer'}})
        .then((r) => {
          console.log(r); return r;
        })) ,
  },
};

const app = _express2.default.call(void 0, );

app.use(
    _expressgraphql2.default.call(void 0, {
      schema: _schema.addResolversToSchema.call(void 0, {schema: _schema4.default, resolvers}),
      graphiql: true,
    }),
);

app.listen(4000, () => {
  console.info('Server listening on http://localhost:4000');
});
