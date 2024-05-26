import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindAllProductsController } from 'adapters/driver/controllers/product/find-all-products.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { FindAllProductsPrismaRepository } from 'core/application/repositories/product/find-all-products.prisma.repository'
import { FindAllProductsUC } from 'core/application/usecases/product/find-all-products.usecase'
import { Product } from 'core/domain/entities/product.entity'

export const FindAllProductsControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const productRepository = new FindAllProductsPrismaRepository(
    databaseConnection
  )
  const findAllProductsUseCase = new FindAllProductsUC(productRepository)
  const genericSucessPresenter = new HttpGenericResponse<Product[]>()
  const findAllProductsController = new FindAllProductsController(
    findAllProductsUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    productRepository,
    findAllProductsUseCase,
    findAllProductsController
  }
}
