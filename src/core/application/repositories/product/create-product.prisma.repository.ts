import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateProductDTO } from 'adapters/driver/dtos/product/create-product.dto'
import { CreateProductRepository } from 'core/application/ports/out/create-product.repository.out'
import { Product } from 'core/domain/entities/product.entity'

export class CreateProductPrismaRepository implements CreateProductRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async create(body: CreateProductDTO): Promise<Product> {
    return this.prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        category: body.category,
        price: body.price
      }
    })
  }
}
