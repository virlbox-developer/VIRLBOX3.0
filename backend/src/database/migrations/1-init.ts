import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InitMigration1703081600000 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    // Users table
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "uuid",
            type: "uuid",
            isUnique: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "username",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "passwordHash",
            type: "varchar",
          },
          {
            name: "role",
            type: "varchar",
            default: "user",
          },
          {
            name: "firstName",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "lastName",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "isActive",
            type: "boolean",
            default: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );

    // Create index on email
    await queryRunner.query(
      `CREATE INDEX idx_users_email ON users(email)`
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}

