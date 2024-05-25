import { UsersRoute } from 'adapters/driver/routes'
import { Application } from 'express'

export const RouterFramework = (app: Application): void => {
  app.use('/users', UsersRoute)
}
