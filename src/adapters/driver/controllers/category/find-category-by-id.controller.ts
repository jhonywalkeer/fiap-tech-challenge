import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { ErrorName } from 'common/enums/error-name.enum'
import { Category } from 'core/domain/entities/category.entity'
import { FindCategoryByIdDTO } from 'adapters/driver/dtos/category/find-category-by-id.dto'
import { FindCategoryByIdUseCase } from 'core/application/ports/in/find-category-by-id.usecase.in'
import { ErrorMessage } from 'common/enums/error-message.enum'

export class FindCategoryByIdController
  implements Controller<Category | never>
{
  constructor(
    private readonly findCategoryByIdUC: FindCategoryByIdUseCase,
    private readonly findCategoryByIdPresenter: ResponseHandler<Category>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const parameters = Object.assign(new FindCategoryByIdDTO(id))
    const category: Category | null =
      await this.findCategoryByIdUC.execute(parameters)

    if (!category) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.CategoryNotFound
      )
    }

    return this.findCategoryByIdPresenter.response(category, StatusCode.Sucess)
  }
}
