import { CreateCategoryDTO } from '../../../../adapters/driver/dtos/category/create-category.dto'
import { ResponseHandler } from '../../../../adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { Controller } from '../../../../core/application/ports/in/controller.in'
import { CreateCategoryUseCase } from '../../../../core/application/ports/in/create-category.usecase.in'
import { HttpRequest } from '../../../../core/application/ports/in/http-request.in'
import { Category } from '../../../../core/domain/entities/category.entity'

export class CreateCategoryController implements Controller<Category> {
  constructor(
    private readonly createCategoryUC: CreateCategoryUseCase,
    private readonly createCategoryPresenter: ResponseHandler<Category>
  ) {}
  async handle(body: HttpRequest) {
    const { name, description } = body.body
    const payload = Object.assign(new CreateCategoryDTO(name, description))
    const category: Category = await this.createCategoryUC.execute(payload)
    return this.createCategoryPresenter.response(category, StatusCode.Created)
  }
}
