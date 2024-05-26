import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { FindAllProductsUseCase } from 'core/application/ports/in/find-all-products.usecase.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { Product } from 'core/domain/entities/product.entity'

export class FindAllProductsController
  implements Controller<Product[] | never>
{
  constructor(
    private readonly findAllUserUC: FindAllProductsUseCase,
    private readonly findAllUserPresenter: ResponseHandler<Product[]>
  ) {}
  async handle(queryParameters: HttpRequest) {
    const products: Product[] | null = await this.findAllUserUC.execute(
      queryParameters.query
    )

    if (!products) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorMessage.NotFoundInformation,
        'Produtos não encontrados'
      )
    }
    return this.findAllUserPresenter.response(products, StatusCode.Sucess)
  }
}
