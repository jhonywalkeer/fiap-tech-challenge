import { DeleteProductDTO } from 'adapters/driver/dtos/product/delete-product.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from 'common/enums/status-code.enum'
import { Controller } from 'core/application/ports/in/controller.in'
import { DeleteProductUseCase } from 'core/application/ports/in/delete-product.usecase.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'

export class DeleteProductController implements Controller<void> {
  constructor(
    private readonly deleteProductUC: DeleteProductUseCase,
    private readonly deleteProductPresenter: ResponseHandler<void>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const payload = Object.assign(new DeleteProductDTO(id))

    const product = await this.deleteProductUC.execute(payload)
    Promise.resolve(product)

    return this.deleteProductPresenter.response(product, StatusCode.Accepted)
  }
}
