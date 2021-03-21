import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CretaeSpecificationService } from "../modules/cars/services/CretaeSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificatiobService = new CretaeSpecificationService(
    specificationRepository
  );

  createSpecificatiobService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
