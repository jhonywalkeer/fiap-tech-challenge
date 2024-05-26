import { UpdateProductDTO } from 'adapters/driver/dtos/product/update-product.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { UpdateProductUseCase } from 'core/application/ports/in/update-product.usecase.in'
import { Product } from 'core/domain/entities/product.entity'

export class UpdateProductController implements Controller<Product | never> {
  constructor(
    private readonly updateProductUC: UpdateProductUseCase,
    private readonly updateProductPresenter: ResponseHandler<Product>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const { name, description, price, category } = pathParameters.body
    const parameters = Object.assign(
      new UpdateProductDTO(id, name, description, price, category)
    )
    const product: Product | null =
      await this.updateProductUC.execute(parameters)

    if (!product) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorMessage.NotFoundInformation,
        'Produto informado não encontrado'
      )
    }

    return this.updateProductPresenter.response(product, StatusCode.Sucess)
  }
}
