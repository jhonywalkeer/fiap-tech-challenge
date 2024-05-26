import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateUserControllerFactory } from '../factories/users/create-user.factory'
import { FindUserByIdControllerFactory } from '../factories/users/find-user-by-id.factory'

export const UsersRoute = Router()

const { createUserController } = CreateUserControllerFactory()
const { findUserByParameterController } = FindUserByIdControllerFactory()

UsersRoute.post('/', ExpressRouteHttp(createUserController)).get(
  '/',
  ExpressRouteHttp(findUserByParameterController)
)
