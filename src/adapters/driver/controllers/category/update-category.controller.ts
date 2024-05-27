import { UpdateCategoryDTO } from 'adapters/driver/dtos/category/update-category.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { Category } from 'core/domain/entities/category.entity'

export class UpdateCategoryController implements Controller<Category | never> {
  constructor(
    private readonly updateCategoryUC: any, // UpdateCategoryUseCase,
    private readonly updateCategoryPresenter: ResponseHandler<Category>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const { name, description } = pathParameters.body
    const parameters = Object.assign(
      new UpdateCategoryDTO(id, name, description)
    )
    const category: Category | null =
      await this.updateCategoryUC.execute(parameters)

    if (!category) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorMessage.NotFoundInformation,
        'Produto informado não encontrado'
      )
    }

    return this.updateCategoryPresenter.response(category, StatusCode.Sucess)
  }
}
