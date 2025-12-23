export class Init1000 {
  name = 'Init1000';

  async up(queryRunner: any) {
    await queryRunner.query(\`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        passwordHash VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    \`);

    await queryRunner.query(\`
      CREATE TABLE content (
        id SERIAL PRIMARY KEY,
        userId INTEGER NOT NULL,
        title VARCHAR(255),
        content TEXT,
        platform VARCHAR(50),
        status VARCHAR(50),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    \`);

    await queryRunner.query(\`
      CREATE TABLE analytics (
        id SERIAL PRIMARY KEY,
        userId INTEGER,
        contentId INTEGER,
        platform VARCHAR(50),
        metric VARCHAR(100),
        value DECIMAL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (contentId) REFERENCES content(id)
      )
    \`);
  }

  async down(queryRunner: any) {
    await queryRunner.query('DROP TABLE analytics');
    await queryRunner.query('DROP TABLE content');
    await queryRunner.query('DROP TABLE users');
  }
}
