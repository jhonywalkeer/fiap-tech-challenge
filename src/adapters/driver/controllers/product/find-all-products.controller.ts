import { ResponseHandler } from '../../../../adapters/driver/presenters/response-handler.presenter'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { Controller } from '../../../../core/application/ports/in/controller.in'
import { FindAllProductsUseCase } from '../../../../core/application/ports/in/find-all-products.usecase.in'
import { HttpRequest } from '../../../../core/application/ports/in/http-request.in'
import { Product } from '../../../../core/domain/entities/product.entity'

export class FindAllProductsController implements Controller<Product[]> {
  constructor(
    private readonly findAllProductUC: FindAllProductsUseCase,
    private readonly findAllProductPresenter: ResponseHandler<Product[]>
  ) {}
  async handle(queryParameters: HttpRequest) {
    const products: Product[] | null = await this.findAllProductUC.execute(
      queryParameters.query
    )

    if (!products) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.ProductsNotFound
      )
    }
    return this.findAllProductPresenter.response(products, StatusCode.Sucess)
  }
}
