import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateCategoryControllerFactory } from '../factories/category/create-category.factory'
import { FindCategoryByIdControllerFactory } from '../factories/category/find-category-by-id.factory'

export const CategoriesRoute = Router()

const { createCategoryController } = CreateCategoryControllerFactory()
const { findCategoryByIdController } = FindCategoryByIdControllerFactory()

CategoriesRoute.post('/', ExpressRouteHttp(createCategoryController)).get(
  '/:id',
  ExpressRouteHttp(findCategoryByIdController)
)
