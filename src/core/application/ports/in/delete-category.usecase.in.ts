import { DeleteCategoryDTO } from '../../../../adapters/driver/dtos/category/delete-category.dto'

export interface DeleteCategoryUseCase {
  execute: (pathParameters: DeleteCategoryDTO) => Promise<void>
}
