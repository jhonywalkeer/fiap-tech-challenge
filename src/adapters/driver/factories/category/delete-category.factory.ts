import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { DeleteProductController } from 'adapters/driver/controllers/product/delete-product.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { DeleteCategoryPrismaRepository } from 'core/application/repositories/category/delete-category.prisma.repository'
import { FindCategoryByIdPrismaRepository } from 'core/application/repositories/category/find-category-by-id.prisma.repository'
import { DeleteCategoryUC } from 'core/application/usecases/category/delete-category.usecase'

export const DeleteCategoryControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const findCategoryById = new FindCategoryByIdPrismaRepository(
    databaseConnection
  )
  const categoryRepository = new DeleteCategoryPrismaRepository(
    databaseConnection,
    findCategoryById
  )
  const deleteCategoryUseCase = new DeleteCategoryUC(categoryRepository)
  const genericSucessPresenter = new HttpGenericResponse<void>()
  const deleteCategoryController = new DeleteProductController(
    deleteCategoryUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    categoryRepository,
    deleteCategoryUseCase,
    deleteCategoryController
  }
}
