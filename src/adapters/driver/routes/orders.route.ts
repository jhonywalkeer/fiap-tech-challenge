import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateOrderControllerFactory } from '../factories/order/create-order.factory'
import { FindAllOrdersControllerFactory } from '../factories/order/find-all-orders.factory'
import { FindOrderByIdControllerFactory } from '../factories/order/find-order-by-id.factory'
import { DeleteCategoryControllerFactory } from '../factories/category/delete-category.factory'

export const OrdersRoute = Router()

const { createOrderController } = CreateOrderControllerFactory()
const { findOrderByIdController } = FindOrderByIdControllerFactory()
const { findAllOrdersController } = FindAllOrdersControllerFactory()
const { deleteCategoryController } = DeleteCategoryControllerFactory()

OrdersRoute.post('/', ExpressRouteHttp(createOrderController))
OrdersRoute.get('/:id', ExpressRouteHttp(findOrderByIdController))
OrdersRoute.get('/', ExpressRouteHttp(findAllOrdersController))
OrdersRoute.delete('/:id', ExpressRouteHttp(deleteCategoryController))
