import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { UpdatePaymentControllerFactory } from '../factories/payment/update-payment.factory'

export const PaymentsRoute = Router()

const { updatePaymentController } = UpdatePaymentControllerFactory()

PaymentsRoute.put('/:id', ExpressRouteHttp(updatePaymentController))
