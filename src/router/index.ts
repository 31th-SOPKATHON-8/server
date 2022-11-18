import { Router } from "express";
import userRouter from "./userRouter";
import trailRouter from "./trailRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/trail", trailRouter);

export default router;
