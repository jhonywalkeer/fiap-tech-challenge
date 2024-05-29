import { Router } from 'express'
import { ExpressRouteHttp } from '../../../adapters/driver/http/express-route.http'
import { CreateProductControllerFactory } from '../factories/product/create-product.factory'
import { FindProductByIdControllerFactory } from '../factories/product/find-product-by-id.factory'
import { FindAllProductsControllerFactory } from '../factories/product/find-all-products.factory'
import { DeleteProductControllerFactory } from '../factories/product/delete-product.factory'
import { UpdateProductControllerFactory } from '../factories/product/update-product.factory'

export const ProductsRoute = Router()

const { createProductController } = CreateProductControllerFactory()
const { findProductByIdController } = FindProductByIdControllerFactory()
const { findAllProductsController } = FindAllProductsControllerFactory()
const { updateProductController } = UpdateProductControllerFactory()
const { deleteProductController } = DeleteProductControllerFactory()

ProductsRoute.post('/', ExpressRouteHttp(createProductController))
  .get('/:id', ExpressRouteHttp(findProductByIdController))
  .get('/', ExpressRouteHttp(findAllProductsController))
  .patch('/:id', ExpressRouteHttp(updateProductController))
  .put('/:id', ExpressRouteHttp(updateProductController))
  .delete('/:id', ExpressRouteHttp(deleteProductController))
