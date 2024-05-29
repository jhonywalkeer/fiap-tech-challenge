import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { FindProductByIdController } from '../../../../adapters/driver/controllers/product/find-product-by-id.controller'
import { HttpGenericResponse } from '../../../../adapters/driver/presenters/http-generic-response.presenter'
import { FindProductByIdPrismaRepository } from '../../../../core/application/repositories/product/find-product-by-id.prisma.repository'
import { FindProductByIdUC } from '../../../../core/application/usecases/product/find-product-by-id.usecase'
import { Product } from '../../../../core/domain/entities/product.entity'

export const FindProductByIdControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const productRepository = new FindProductByIdPrismaRepository(
    databaseConnection
  )
  const findProductByIdUseCase = new FindProductByIdUC(productRepository)
  const genericSucessPresenter = new HttpGenericResponse<Product>()
  const findProductByIdController = new FindProductByIdController(
    findProductByIdUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    productRepository,
    findProductByIdUseCase,
    findProductByIdController
  }
}
