import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { UpdateProductController } from '../../../../adapters/driver/controllers/product/update-product.controller'
import { HttpGenericResponse } from '../../../../adapters/driver/presenters/http-generic-response.presenter'
import { FindProductByIdPrismaRepository } from '../../../../core/application/repositories/product/find-product-by-id.prisma.repository'
import { UpdateProductPrismaRepository } from '../../../../core/application/repositories/product/update-product.prisma.repository'
import { UpdateProductUC } from '../../../../core/application/usecases/product/update-product.usecase'
import { Product } from '../../../../core/domain/entities/product.entity'

export const UpdateProductControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const findProductById = new FindProductByIdPrismaRepository(
    databaseConnection
  )
  const productRepository = new UpdateProductPrismaRepository(
    databaseConnection,
    findProductById
  )
  const updateProductUseCase = new UpdateProductUC(productRepository)
  const genericSucessPresenter = new HttpGenericResponse<Product>()
  const updateProductController = new UpdateProductController(
    updateProductUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    productRepository,
    updateProductUseCase,
    updateProductController
  }
}
