import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateOrderControllerFactory } from '../factories/order/create-order.factory'
import { FindAllOrdersControllerFactory } from '../factories/order/find-all-orders.factory'
import { FindOrderByIdControllerFactory } from '../factories/order/find-order-by-id.factory'

export const OrdersRoute = Router()

const { createOrderController } = CreateOrderControllerFactory()
const { findOrderByIdController } = FindOrderByIdControllerFactory()
const { findAllOrdersController } = FindAllOrdersControllerFactory()

OrdersRoute.post('/', ExpressRouteHttp(createOrderController))
OrdersRoute.get('/:id', ExpressRouteHttp(findOrderByIdController))
OrdersRoute.get('/', ExpressRouteHttp(findAllOrdersController))
