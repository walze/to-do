"use strict";Object.defineProperty(exports, "__esModule", {value: true});

 class Tables1592818856863  {constructor() { Tables1592818856863.prototype.__init.call(this); }
    __init() {this.name = 'Tables1592818856863'}

     async up(queryRunner) {
      await queryRunner.query('CREATE TABLE `tag` (`id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) NOT NULL, `label` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
      await queryRunner.query('CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
      await queryRunner.query('CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `content` varchar(255) NOT NULL, `timestamp` datetime NOT NULL, `userId` int NULL, UNIQUE INDEX `REL_1e982e43f63a98ad9918a86035` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
      await queryRunner.query('ALTER TABLE `todo` ADD CONSTRAINT `FK_1e982e43f63a98ad9918a86035c` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    }

     async down(queryRunner) {
      await queryRunner.query('ALTER TABLE `todo` DROP FOREIGN KEY `FK_1e982e43f63a98ad9918a86035c`');
      await queryRunner.query('DROP INDEX `REL_1e982e43f63a98ad9918a86035` ON `todo`');
      await queryRunner.query('DROP TABLE `todo`');
      await queryRunner.query('DROP TABLE `user`');
      await queryRunner.query('DROP TABLE `tag`');
    }
} exports.Tables1592818856863 = Tables1592818856863;
