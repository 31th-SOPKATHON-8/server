import { Router } from "express";
import brandRouter from "./brandRouter";
import postRouter from "./postRouter";

const router: Router = Router();

router.use("/brand", brandRouter);
router.use("/post", postRouter);

export default router;