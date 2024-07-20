import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1721507560219 implements MigrationInterface {
    name = 'Default1721507560219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`username\` varchar(200) NOT NULL, \`email\` varchar(200) NOT NULL, \`password\` varchar(255) NOT NULL, \`avatar\` longblob NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
