import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1721756737226 implements MigrationInterface {
    name = 'Default1721756737226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transactions\` CHANGE \`title\` \`category_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`transactions\` DROP COLUMN \`category_id\``);
        await queryRunner.query(`ALTER TABLE \`transactions\` ADD \`category_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`transactions\` ADD CONSTRAINT \`FK_c9e41213ca42d50132ed7ab2b0f\` FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transactions\` DROP FOREIGN KEY \`FK_c9e41213ca42d50132ed7ab2b0f\``);
        await queryRunner.query(`ALTER TABLE \`transactions\` DROP COLUMN \`category_id\``);
        await queryRunner.query(`ALTER TABLE \`transactions\` ADD \`category_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`ALTER TABLE \`transactions\` CHANGE \`category_id\` \`title\` varchar(255) NOT NULL`);
    }

}
