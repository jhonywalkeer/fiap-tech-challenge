import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { CreateUserUseCase } from 'core/application/ports/in/create-user.usecase.in'
import { User } from 'core/domain/entities/user.entity'
import { StatusCode } from 'common/enums/status-code.enum'

export class CreateUserController implements Controller<User | never> {
  constructor(
    private readonly createUserUC: CreateUserUseCase,
    private readonly createUserPresenter: ResponseHandler<User>
  ) {}
  async handle(payload: HttpRequest) {
    const body = payload.body
    const user: User = await this.createUserUC.execute(body)
    return this.createUserPresenter.response(user, StatusCode.Created)
  }
}
