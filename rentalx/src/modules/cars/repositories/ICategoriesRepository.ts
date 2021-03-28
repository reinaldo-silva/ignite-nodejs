import { Category } from "../entities/category";

// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepositoty {
  findByName(name: string): Promise<Category>;

  list(): Promise<Category[]>;

  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepositoty, ICreateCategoryDTO };
