"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _assert = require('assert'); var _assert2 = _interopRequireDefault(_assert);


var _Todo = require('../models/Todo');

 const addTodo = (_, {data}) => {
  _assert2.default.call(void 0, data, 'no data provided');
  _assert2.default.call(void 0, data.content, 'no content provided');
  _assert2.default.call(void 0, data.user, 'no user provided');

  return _Todo.addTodo.call(void 0, data) ;
}; exports.addTodo = addTodo;
