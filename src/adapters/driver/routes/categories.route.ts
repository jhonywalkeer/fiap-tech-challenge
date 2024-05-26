import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateCategoryControllerFactory } from '../factories/category/create-category.factory'

export const CategoriesRoute = Router()

const { createCategoryController } = CreateCategoryControllerFactory()

CategoriesRoute.post('/', ExpressRouteHttp(createCategoryController))
