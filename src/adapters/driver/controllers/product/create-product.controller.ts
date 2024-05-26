import { CreateProductDTO } from 'adapters/driver/dtos/product/create-product.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from 'common/enums/status-code.enum'
import { Controller } from 'core/application/ports/in/controller.in'
import { CreateProductUseCase } from 'core/application/ports/in/create-product.usecase.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { Product } from 'core/domain/entities/product.entity'

export class CreateProductController implements Controller<Product | never> {
  constructor(
    private readonly createProductUC: CreateProductUseCase,
    private readonly createProductPresenter: ResponseHandler<Product>
  ) {}
  async handle(body: HttpRequest) {
    const payload = Object.assign(
      new CreateProductDTO(
        body.body.name,
        body.body.description,
        body.body.category,
        body.body.price
      )
    )
    const product: Product = await this.createProductUC.execute(payload)
    return this.createProductPresenter.response(product, StatusCode.Created)
  }
}
