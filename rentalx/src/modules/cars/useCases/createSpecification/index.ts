import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CretaeSpecificationUseCase } from "./CretaeSpecificationUseCase";

const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CretaeSpecificationUseCase(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
