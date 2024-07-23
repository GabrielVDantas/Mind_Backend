import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1721749797293 implements MigrationInterface {
    name = 'Default1721749797293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transactions\` ADD \`title\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transactions\` DROP COLUMN \`title\``);
    }

}
