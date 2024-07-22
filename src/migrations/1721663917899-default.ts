import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1721663917899 implements MigrationInterface {
    name = 'Default1721663917899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`current_balance\` decimal(7,2) NOT NULL DEFAULT '0.00'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`current_balance\``);
    }
}
