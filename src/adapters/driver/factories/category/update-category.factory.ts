import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { UpdateCategoryController } from 'adapters/driver/controllers/category/update-category.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { FindCategoryByIdPrismaRepository } from 'core/application/repositories/category/find-category-by-id.prisma.repository'
import { UpdateCategoryPrismaRepository } from 'core/application/repositories/category/update-category.prisma.repository'
import { UpdateCategoryUC } from 'core/application/usecases/category/update-category.usecase'
import { Category } from 'core/domain/entities/category.entity'

export const UpdateCategoryControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const findCategoryById = new FindCategoryByIdPrismaRepository(
    databaseConnection
  )
  const categoryRepository = new UpdateCategoryPrismaRepository(
    databaseConnection,
    findCategoryById
  )
  const updateCategoryUseCase = new UpdateCategoryUC(categoryRepository)
  const genericSucessPresenter = new HttpGenericResponse<Category>()
  const updateCategoryController = new UpdateCategoryController(
    updateCategoryUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    categoryRepository,
    updateCategoryUseCase,
    updateCategoryController
  }
}
