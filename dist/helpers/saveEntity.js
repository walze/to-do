"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _useConnection = require('../helpers/useConnection');

 const saveEntity = (data) => _useConnection.useConnection.call(void 0, 
    (conn) => conn.manager.save(data),
); exports.saveEntity = saveEntity;
