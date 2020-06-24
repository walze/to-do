import {MigrationInterface, QueryRunner} from "typeorm";

export class Tables1593025932972 implements MigrationInterface {
    name = 'Tables1593025932972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo_tags_tag` (`todoId` int NOT NULL, `tagId` int NOT NULL, INDEX `IDX_5dc0015c16ba6a838d953ed07f` (`todoId`), INDEX `IDX_c0e14c0180e343dfa2fa00c24a` (`tagId`), PRIMARY KEY (`todoId`, `tagId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `todo_tags_tag` ADD CONSTRAINT `FK_5dc0015c16ba6a838d953ed07f2` FOREIGN KEY (`todoId`) REFERENCES `todo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `todo_tags_tag` ADD CONSTRAINT `FK_c0e14c0180e343dfa2fa00c24a5` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `todo_tags_tag` DROP FOREIGN KEY `FK_c0e14c0180e343dfa2fa00c24a5`");
        await queryRunner.query("ALTER TABLE `todo_tags_tag` DROP FOREIGN KEY `FK_5dc0015c16ba6a838d953ed07f2`");
        await queryRunner.query("DROP INDEX `IDX_c0e14c0180e343dfa2fa00c24a` ON `todo_tags_tag`");
        await queryRunner.query("DROP INDEX `IDX_5dc0015c16ba6a838d953ed07f` ON `todo_tags_tag`");
        await queryRunner.query("DROP TABLE `todo_tags_tag`");
    }

}
