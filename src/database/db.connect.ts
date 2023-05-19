import { PrismaClient } from '@prisma/client';

class PrismaClientProvider {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get client(): PrismaClient {
    return this.prisma;
  }

  async connect(): Promise<void> {
    await this.prisma.$connect();
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}

export default PrismaClientProvider;
