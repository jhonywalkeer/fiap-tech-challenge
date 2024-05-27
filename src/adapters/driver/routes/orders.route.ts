import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateOrderControllerFactory } from '../factories/order/create-order.factory'

export const OrdersRoute = Router()

const { createOrderController } = CreateOrderControllerFactory()

OrdersRoute.post('/', ExpressRouteHttp(createOrderController))
