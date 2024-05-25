import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateUserControllerFactory } from '../factories/users/create-user.factory'

export const UsersRoute = Router()

const { createUserController } = CreateUserControllerFactory()

UsersRoute.post('/', ExpressRouteHttp(createUserController))
