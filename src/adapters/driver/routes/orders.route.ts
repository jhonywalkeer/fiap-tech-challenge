import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateOrderControllerFactory } from '../factories/order/create-order.factory'
import { FindAllOrdersControllerFactory } from '../factories/order/find-all-orders.factory'
import { FindOrderByIdControllerFactory } from '../factories/order/find-order-by-id.factory'
import { DeleteOrderControllerFactory } from '../factories/order/delete-order.factory'
import { UpdateOrderControllerFactory } from '../factories/order/update-order.factory'

export const OrdersRoute = Router()

const { createOrderController } = CreateOrderControllerFactory()
const { findOrderByIdController } = FindOrderByIdControllerFactory()
const { findAllOrdersController } = FindAllOrdersControllerFactory()
const { updateOrderController } = UpdateOrderControllerFactory()
const { deleteOrderController } = DeleteOrderControllerFactory()

OrdersRoute.post('/', ExpressRouteHttp(createOrderController))
OrdersRoute.get('/:id', ExpressRouteHttp(findOrderByIdController))
OrdersRoute.get('/', ExpressRouteHttp(findAllOrdersController))
OrdersRoute.patch('/:id', ExpressRouteHttp(updateOrderController))
OrdersRoute.put('/:id', ExpressRouteHttp(updateOrderController))
OrdersRoute.delete('/:id', ExpressRouteHttp(deleteOrderController))
