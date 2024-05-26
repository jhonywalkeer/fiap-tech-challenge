import {
  CategoriesRoute,
  ProductsRoute,
  UsersRoute
} from 'adapters/driver/routes'
import { Application } from 'express'

export const RouterFramework = (app: Application): void => {
  app.use('/categories', CategoriesRoute)
  app.use('/products', ProductsRoute)
  app.use('/users', UsersRoute)
}
