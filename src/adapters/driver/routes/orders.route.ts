import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateOrderControllerFactory } from '../factories/order/create-order.factory'
import { FindAllOrdersControllerFactory } from '../factories/order/find-all-orders.factory'

export const OrdersRoute = Router()

const { createOrderController } = CreateOrderControllerFactory()
const { findAllOrdersController } = FindAllOrdersControllerFactory()

OrdersRoute.post('/', ExpressRouteHttp(createOrderController))
OrdersRoute.get('/', ExpressRouteHttp(findAllOrdersController))
