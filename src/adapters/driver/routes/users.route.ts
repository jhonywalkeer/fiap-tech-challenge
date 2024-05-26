import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { CreateUserControllerFactory } from '../factories/users/create-user.factory'
import { FindUserByIdControllerFactory } from '../factories/users/find-user-by-id.factory'
import { FindAllUsersControllerFactory } from '../factories/users/find-all-users.factory'

export const UsersRoute = Router()

const { createUserController } = CreateUserControllerFactory()
const { findUserByIdController } = FindUserByIdControllerFactory()
const { findAllUsersController } = FindAllUsersControllerFactory()

UsersRoute.post('/', ExpressRouteHttp(createUserController))
  .get('/:cpf', ExpressRouteHttp(findUserByIdController))
  .get('/', ExpressRouteHttp(findAllUsersController))
