import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1721524976810 implements MigrationInterface {
    name = 'Default1721524976810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`transactions\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`description\` text NOT NULL, \`amount\` decimal(7,2) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`transactions\``);
    }

}
