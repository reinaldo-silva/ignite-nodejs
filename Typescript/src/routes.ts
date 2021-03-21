import { Request, Response } from "express";

import CreateCourseService from "./createCouseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Reinaldo",
  });

  return response.send();
}
