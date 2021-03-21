import { Category } from "../model/category";

// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepositoty {
  findByName(name: string): Category;

  list(): Category[];

  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepositoty, ICreateCategoryDTO };
