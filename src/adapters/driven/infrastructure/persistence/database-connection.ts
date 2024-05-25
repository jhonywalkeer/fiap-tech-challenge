import { PrismaClient } from '@prisma/client'

export class DatabaseConnection extends PrismaClient {
  constructor() {
    super()
  }

  async connect() {
    await this.$connect()
  }

  async disconnect() {
    await this.$disconnect()
  }
}
