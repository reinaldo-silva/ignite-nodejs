import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

console.log("teste");
console.log("teste");

router.use("/categories", categoriesRoutes);
router.use("/specification", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
