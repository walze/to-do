"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _assert = require('assert'); var _assert2 = _interopRequireDefault(_assert);

var _Tag = require('../models/Tag');

 const addTag = (_, {data}) => {
  _assert2.default.call(void 0, data, 'no data provided');
  _assert2.default.call(void 0, data.label, 'no label provided');
  _assert2.default.call(void 0, data.value, 'no value provided');

  return _Tag.addTag.call(void 0, data);
}; exports.addTag = addTag;
