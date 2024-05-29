import {
  CategoriesRoute,
  ProductsRoute,
  OrdersRoute,
  UsersRoute,
  PaymentsRoute
} from '../../../adapters/driver/routes'
import {} from '../../../adapters/driver/routes/orders.route'
import { Application } from 'express'
import { ExpressRateLimit } from './rate-limit.framework'
import { serve, setup } from 'swagger-ui-express'
import { SwaggerDocumention } from './swagger-framework'

export const RouterFramework = (app: Application): void => {
  const routes = [
    {
      path: '/categories',
      middleware: ExpressRateLimit,
      handler: CategoriesRoute
    },
    { path: '/products', middleware: ExpressRateLimit, handler: ProductsRoute },
    { path: '/payments', middleware: ExpressRateLimit, handler: PaymentsRoute },
    { path: '/orders', middleware: ExpressRateLimit, handler: OrdersRoute },
    { path: '/users', middleware: ExpressRateLimit, handler: UsersRoute }
  ]

  routes.forEach((route) => {
    app.use(route.path, route.middleware, route.handler)
    app.use('/docs', serve, setup(SwaggerDocumention))
  })
}
