import { Router } from "express";

import { criteriaRouter } from "./criteria.routes";
import { programsRoutes } from "./programs.routes";
import { provincesRoutes } from "./provinces.routes";
import { resultsRoutes } from "./results.routes";
import { scoresRoutes } from "./scores.routes";

const router = Router();

router.use("/provinces", provincesRoutes);
router.use("/programs", programsRoutes);
router.use("/scores", scoresRoutes);
router.use("/criteria", criteriaRouter);
router.use("/results", resultsRoutes);

export { router };