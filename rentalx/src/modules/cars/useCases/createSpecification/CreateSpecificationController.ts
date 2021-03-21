import { Request, Response } from "express";

import { CretaeSpecificationUseCase } from "./CretaeSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CretaeSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
