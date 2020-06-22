import { MigrationInterface, QueryRunner } from 'typeorm'

export class Tables1592847981327 implements MigrationInterface {
    name = 'Tables1592847981327'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE `tag` (`id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) NOT NULL, `label` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_065d4d8f3b5adb4a08841eae3c` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `content` varchar(255) NOT NULL, `timestamp` datetime NOT NULL, `userId` int NULL, UNIQUE INDEX `REL_1e982e43f63a98ad9918a86035` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('ALTER TABLE `todo` ADD CONSTRAINT `FK_1e982e43f63a98ad9918a86035c` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `todo` DROP FOREIGN KEY `FK_1e982e43f63a98ad9918a86035c`')
      await queryRunner.query('DROP INDEX `REL_1e982e43f63a98ad9918a86035` ON `todo`')
      await queryRunner.query('DROP TABLE `todo`')
      await queryRunner.query('DROP INDEX `IDX_065d4d8f3b5adb4a08841eae3c` ON `user`')
      await queryRunner.query('DROP TABLE `user`')
      await queryRunner.query('DROP TABLE `tag`')
    }
}
