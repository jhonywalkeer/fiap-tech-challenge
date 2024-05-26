import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateProductControllerFactory } from '../factories/product/create-product.factory'

export const ProductsRoute = Router()

const { createProductController } = CreateProductControllerFactory()

ProductsRoute.post('/', ExpressRouteHttp(createProductController))
