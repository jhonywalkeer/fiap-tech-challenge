import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateProductController } from 'adapters/driver/controllers/product/create-product.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { CreateProductPrismaRepository } from 'core/application/repositories/product/create-product.prisma.repository'
import { CreateProductUC } from 'core/application/usecases/product/create-product.usecase'
import { Product } from 'core/domain/entities/product.entity'

export const CreateProductControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const productRepository = new CreateProductPrismaRepository(
    databaseConnection
  )
  const createproductUseCase = new CreateProductUC(productRepository)
  const genericSucessPresenter = new HttpGenericResponse<Product>()
  const createProductController = new CreateProductController(
    createproductUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    productRepository,
    createproductUseCase,
    createProductController
  }
}
