import {MigrationInterface, QueryRunner} from "typeorm";

export class Tables1593005463253 implements MigrationInterface {
    name = 'Tables1593005463253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `REL_1e982e43f63a98ad9918a86035` ON `todo`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE UNIQUE INDEX `REL_1e982e43f63a98ad9918a86035` ON `todo` (`userId`)");
    }

}
