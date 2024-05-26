import { DeleteCategoryDTO } from 'adapters/driver/dtos/category/delete-category.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from 'common/enums/status-code.enum'
import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'

export class DeleteCategoryController implements Controller<void | never> {
  constructor(
    private readonly deleteCategoryUC: any,
    private readonly deleteCategoryPresenter: ResponseHandler<void>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const payload = Object.assign(new DeleteCategoryDTO(id))

    const category = await this.deleteCategoryUC.execute(payload)
    Promise.resolve(category)

    return this.deleteCategoryPresenter.response(category, StatusCode.Accepted)
  }
}
