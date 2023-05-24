import { PrismaClient } from '@prisma/client';

class Database {
  private database: PrismaClient;

  constructor() {
    this.database = new PrismaClient();
  }

  get client(): PrismaClient {
    return this.database;
  }

  async connect(): Promise<void> {
    await this.database.$connect();
  }

  async disconnect(): Promise<void> {
    await this.database.$disconnect();
  }
}

export default Database;
