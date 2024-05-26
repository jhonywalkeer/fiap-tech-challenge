import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateCategoryController } from 'adapters/driver/controllers/category/create-category.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { CreateCategoryPrismaRepository } from 'core/application/repositories/category/create-category.prisma.repository'
import { CreateCategoryUC } from 'core/application/usecases/category/create-category.usecase'
import { Category } from 'core/domain/entities/category.entity'

export const CreateCategoryControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const categoryRepository = new CreateCategoryPrismaRepository(
    databaseConnection
  )
  const createCategoryUseCase = new CreateCategoryUC(categoryRepository)
  const genericSucessPresenter = new HttpGenericResponse<Category>()
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    categoryRepository,
    createCategoryUseCase,
    createCategoryController
  }
}
