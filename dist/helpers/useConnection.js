"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _typeorm = require('typeorm');

var _ramda = require('ramda');

 const useConnection = async ( 
  fn,
  getConnection = _typeorm.createConnection,
) => {
  const conn = getConnection();

  return conn
      .then((c) => Promise.all(_ramda.pair.call(void 0, c, fn(c))))
      .then(([c, r]) => c.close().then(() => r))
      .catch((err) => conn.then((c) => {
        c.close();

        throw err;
      }));
}; exports.useConnection = useConnection;
