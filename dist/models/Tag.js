"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _typeorm = require('typeorm');
var _ramda = require('ramda');


var _saveEntity = require('app/helpers/saveEntity');

@Entity()
 class Tag extends _typeorm.BaseEntity {
    PrimaryGeneratedColumn()
    

    Column()
    

    Column()
    
} exports.Tag = Tag;


 const addTag = _ramda.pipe.call(void 0, 
    ({label, value}) => {
      const ntag = new Tag();
      ntag.label = label;
      ntag.value = value;

      return ntag;
    },
    _saveEntity.saveEntity,
); exports.addTag = addTag;
