"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User');

var _assert = require('assert'); var _assert2 = _interopRequireDefault(_assert);


 const addUser = (_, {data}) => {
  _assert2.default.call(void 0, data && data.name, 'no name provided');

  return _User.addUser.call(void 0, {name: data.name});
}; exports.addUser = addUser;
