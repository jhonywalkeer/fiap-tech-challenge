import { ProductsRoute, UsersRoute } from 'adapters/driver/routes'
import { Application } from 'express'

export const RouterFramework = (app: Application): void => {
  app.use('/users', UsersRoute)
  app.use('/products', ProductsRoute)
}
