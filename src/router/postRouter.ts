import { Router } from "express";
import { postController } from "../controller";

const router: Router = Router();
router.post("/comment", postController.createComment);
router.get("/:postId", postController.getPost);

export default router;
