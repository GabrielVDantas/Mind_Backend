import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1721777792965 implements MigrationInterface {
    name = 'Default1721777792965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transactions\` ADD \`type\` enum ('despesa', 'reserva') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transactions\` DROP COLUMN \`type\``);
    }

}
