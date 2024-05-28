import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { FindAllCategoriesController } from '../../../../adapters/driver/controllers/category/find-all-categories.controller'
import { HttpGenericResponse } from '../../../../adapters/driver/presenters/http-generic-response.presenter'
import { FindAllCategoriesPrismaRepository } from '../../../../core/application/repositories/category/find-all-categories.prisma.repository'
import { FindAllCategoriesUC } from '../../../../core/application/usecases/category/find-all-categories.usecase'
import { Category } from '../../../../core/domain/entities/category.entity'

export const FindAllCategoriesControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const categoryRepository = new FindAllCategoriesPrismaRepository(
    databaseConnection
  )
  const findAllCategoriesUseCase = new FindAllCategoriesUC(categoryRepository)
  const genericSucessPresenter = new HttpGenericResponse<Category[]>()
  const findAllCategoriesController = new FindAllCategoriesController(
    findAllCategoriesUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    categoryRepository,
    findAllCategoriesUseCase,
    findAllCategoriesController
  }
}
