import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { User } from 'core/domain/entities/user.entity'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { ErrorName } from 'common/enums/error-name.enum'
import { FindUserByIdDTO } from 'adapters/driver/dtos/users/find-user-by-id.dto'
import { FindUserByIdUseCase } from 'core/application/ports/in/find-user-by-id.usecase.in'
import { ErrorMessage } from 'common/enums/error-message.enum'

export class FindByIdController implements Controller<User> {
  constructor(
    private readonly findUserByIdUC: FindUserByIdUseCase,
    private readonly findUserByIdPresenter: ResponseHandler<User>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { cpf } = pathParameters.params
    const parameters = Object.assign(new FindUserByIdDTO(cpf))
    const user: User | null = await this.findUserByIdUC.execute(parameters)

    if (!user) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.UserNotFound
      )
    }

    return this.findUserByIdPresenter.response(user, StatusCode.Sucess)
  }
}
