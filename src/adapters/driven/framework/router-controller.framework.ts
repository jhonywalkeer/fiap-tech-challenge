import {
  CategoriesRoute,
  ProductsRoute,
  UsersRoute
} from 'adapters/driver/routes'
import { OrdersRoute } from 'adapters/driver/routes/orders.route'
import { Application } from 'express'

export const RouterFramework = (app: Application): void => {
  app.use('/categories', CategoriesRoute)
  app.use('/products', ProductsRoute)
  app.use('/orders', OrdersRoute)
  app.use('/users', UsersRoute)
}
