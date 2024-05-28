import { Controller } from '../../../../core/application/ports/in/controller.in'
import { HttpRequest } from '../../../../core/application/ports/in/http-request.in'
import { ResponseHandler } from '../../../../adapters/driver/presenters/response-handler.presenter'
import { CreateUserUseCase } from '../../../../core/application/ports/in/create-user.usecase.in'
import { User } from '../../../../core/domain/entities/user.entity'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { CreateUserDTO } from '../../../../adapters/driver/dtos/users/create-user.dto'

export class CreateUserController implements Controller<User> {
  constructor(
    private readonly createUserUC: CreateUserUseCase,
    private readonly createUserPresenter: ResponseHandler<User>
  ) {}
  async handle(body: HttpRequest) {
    const payload = Object.assign(
      new CreateUserDTO(
        body.body.name,
        body.body.email,
        body.body.social_security_number
      )
    )
    const user: User = await this.createUserUC.execute(payload)
    return this.createUserPresenter.response(user, StatusCode.Created)
  }
}
