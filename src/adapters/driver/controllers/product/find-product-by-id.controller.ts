import { Controller } from '../../../../core/application/ports/in/controller.in'
import { HttpRequest } from '../../../../core/application/ports/in/http-request.in'
import { ResponseHandler } from '../../../../adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { Product } from '../../../../core/domain/entities/product.entity'
import { FindProductByIdDTO } from '../../../../adapters/driver/dtos/product/find-product-by-id.dto'
import { FindProductByIdUseCase } from '../../../../core/application/ports/in/find-product-by-id.usecase.in'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'

export class FindProductByIdController implements Controller<Product> {
  constructor(
    private readonly findProductByIdUC: FindProductByIdUseCase,
    private readonly findProductByIdPresenter: ResponseHandler<Product>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const parameters = Object.assign(new FindProductByIdDTO(id))
    const product: Product | null =
      await this.findProductByIdUC.execute(parameters)

    if (!product) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.ProductNotFound
      )
    }

    return this.findProductByIdPresenter.response(product, StatusCode.Sucess)
  }
}
