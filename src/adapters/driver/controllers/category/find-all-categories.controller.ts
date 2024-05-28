import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { FindAllCategoriesUseCase } from 'core/application/ports/in/find-all-categories.usecase.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { Category } from 'core/domain/entities/category.entity'

export class FindAllCategoriesController implements Controller<Category[]> {
  constructor(
    private readonly findAllUserUC: FindAllCategoriesUseCase,
    private readonly findAllUserPresenter: ResponseHandler<Category[]>
  ) {}
  async handle(queryParameters: HttpRequest) {
    const categories: Category[] | null = await this.findAllUserUC.execute(
      queryParameters.query
    )

    if (!categories) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.CategoriesNotFound
      )
    }
    return this.findAllUserPresenter.response(categories, StatusCode.Sucess)
  }
}
