"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint-disable camelcase */









var _typeorm = require('typeorm');

var _User = require('./User');
var _Tag = require('./Tag');
var _ramda = require('ramda');
var _saveEntity = require('app/helpers/saveEntity');


@Entity()
 class Todo extends _typeorm.BaseEntity {
    PrimaryGeneratedColumn()
    

    Column()
    

    OneToMany(() => _Tag.Tag, (tag) => tag.id)
    

    Column()
    

    Column()
    

    OneToOne(() => _User.User)
    @JoinColumn()
    
} exports.Todo = Todo;


 const addTodo = _ramda.pipe.call(void 0, 
    async ({content, user: {name}}) => {
      const ntodo = new Todo();
      const user = await _User.User.findOne({where: {name}}) || await _User.addUser.call(void 0, {name});

      ntodo.user = user;
      ntodo.content = content;
      ntodo.created_at = new Date();
      ntodo.updated_at = new Date();

      return ntodo;
    },
    _ramda.andThen.call(void 0, _saveEntity.saveEntity),
); exports.addTodo = addTodo;
