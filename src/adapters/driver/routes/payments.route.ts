import { Router } from 'express'
import { ExpressRouteHttp } from 'adapters/driver/http/express-route.http'
import { UpdatePaymentControllerFactory } from '../factories/payment/update-payment.factory'

export const PaymentRoute = Router()

const { updatePaymentController } = UpdatePaymentControllerFactory()

PaymentRoute.patch('/:id', ExpressRouteHttp(updatePaymentController))
