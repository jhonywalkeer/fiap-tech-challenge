import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { DeleteProductController } from 'adapters/driver/controllers/product/delete-product.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { DeleteProductPrismaRepository } from 'core/application/repositories/product/delete-product.prisma.repository'
import { DeleteProductUC } from 'core/application/usecases/product/delete-product.usecase'

export const DeleteProductControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const productRepository = new DeleteProductPrismaRepository(
    databaseConnection
  )
  const deleteProductUseCase = new DeleteProductUC(productRepository)
  const genericSucessPresenter = new HttpGenericResponse<void>()
  const deleteProductController = new DeleteProductController(
    deleteProductUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    productRepository,
    deleteProductUseCase,
    deleteProductController
  }
}
