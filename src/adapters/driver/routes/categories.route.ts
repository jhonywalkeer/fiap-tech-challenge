import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateCategoryControllerFactory } from '../factories/category/create-category.factory'
import { FindCategoryByIdControllerFactory } from '../factories/category/find-category-by-id.factory'
import { FindAllCategoriesControllerFactory } from '../factories/category/find-all-categories.factory'
import { DeleteCategoryControllerFactory } from '../factories/category/delete-category.factory'
import { UpdateCategoryControllerFactory } from '../factories/category/update-category.factory'

export const CategoriesRoute = Router()

const { createCategoryController } = CreateCategoryControllerFactory()
const { findCategoryByIdController } = FindCategoryByIdControllerFactory()
const { findAllCategoriesController } = FindAllCategoriesControllerFactory()
const { updateCategoryController } = UpdateCategoryControllerFactory()
const { deleteCategoryController } = DeleteCategoryControllerFactory()

CategoriesRoute.post('/', ExpressRouteHttp(createCategoryController))
  .get('/:id', ExpressRouteHttp(findCategoryByIdController))
  .get('/', ExpressRouteHttp(findAllCategoriesController))
  .patch('/:id', ExpressRouteHttp(updateCategoryController))
  .put('/:id', ExpressRouteHttp(updateCategoryController))
  .delete('/:id', ExpressRouteHttp(deleteCategoryController))
