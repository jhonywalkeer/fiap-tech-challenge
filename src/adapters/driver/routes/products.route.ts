import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateProductControllerFactory } from '../factories/product/create-product.factory'
import { FindProductByIdControllerFactory } from '../factories/product/find-product-by-id.factory'

export const ProductsRoute = Router()

const { createProductController } = CreateProductControllerFactory()
const { findProductByIdController } = FindProductByIdControllerFactory()

ProductsRoute.post('/', ExpressRouteHttp(createProductController)).get(
  '/:id',
  ExpressRouteHttp(findProductByIdController)
)
