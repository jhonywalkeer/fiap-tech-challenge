import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { FindAllUsersUseCase } from 'core/application/ports/in/find-all-users.usecase.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { User } from 'core/domain/entities/user.entity'

export class FindAllUsersController implements Controller<User[]> {
  constructor(
    private readonly findAllUserUC: FindAllUsersUseCase,
    private readonly findAllUserPresenter: ResponseHandler<User[]>
  ) {}
  async handle(queryParameters: HttpRequest) {
    const users: User[] | null = await this.findAllUserUC.execute(
      queryParameters.query
    )

    if (!users) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        'Usuários não encontrados'
      )
    }
    return this.findAllUserPresenter.response(users, StatusCode.Sucess)
  }
}
