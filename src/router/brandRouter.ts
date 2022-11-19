import { Router } from "express";
import brandController from "../controller/brandController";

const router: Router = Router();

router.get("/:brandId", brandController.getBrandData);

export default router;
