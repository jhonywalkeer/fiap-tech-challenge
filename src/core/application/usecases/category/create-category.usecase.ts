import { CreateCategoryDTO } from 'adapters/driver/dtos/category/create-category.dto'
import { CreateCategoryUseCase } from 'core/application/ports/in/create-category.usecase.in'
import { CreateCategoryRepository } from 'core/application/ports/out/create-category.repository.out'
import { Category } from 'core/domain/entities/category.entity'

export class CreateCategoryUC implements CreateCategoryUseCase {
  constructor(
    private readonly createCategoryRepository: CreateCategoryRepository
  ) {}
  async execute(body: CreateCategoryDTO): Promise<Category> | never {
    return await this.createCategoryRepository.create(body)
  }
}
