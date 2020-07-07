"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _typeorm = require('typeorm');

var _ramda = require('ramda');
var _saveEntity = require('app/helpers/saveEntity');

@Entity()
 class User extends _typeorm.BaseEntity {
    PrimaryGeneratedColumn()
    

    Column({unique: true})
    
} exports.User = User;

 const addUser = _ramda.pipe.call(void 0, 
    ({name}) => {
      const nuser = new User();
      nuser.name = name;

      return nuser;
    },
    _saveEntity.saveEntity,
); exports.addUser = addUser;
