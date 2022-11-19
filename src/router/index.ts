import { Router } from "express";
import userRouter from "./userRouter";
import trailRouter from "./trailRouter";
import brandRouter from "./brandRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/trail", trailRouter);
router.use("/brand", brandRouter);

export default router;
