import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindCategoryByIdController } from 'adapters/driver/controllers/category/find-category-by-id.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { FindCategoryByIdPrismaRepository } from 'core/application/repositories/category/find-category-by-id.prisma.repository'
import { FindCategoryByIdUC } from 'core/application/usecases/category/find-category-by-id.usecase'
import { Category } from 'core/domain/entities/category.entity'

export const FindCategoryByIdControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const categoryRepository = new FindCategoryByIdPrismaRepository(
    databaseConnection
  )
  const findCategoryByIdUseCase = new FindCategoryByIdUC(categoryRepository)
  const genericSucessPresenter = new HttpGenericResponse<Category>()
  const findCategoryByIdController = new FindCategoryByIdController(
    findCategoryByIdUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    categoryRepository,
    findCategoryByIdUseCase,
    findCategoryByIdController
  }
}
