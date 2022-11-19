import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { postService } from "../service";

const getPost = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const data = await postService.getPost(+postId);
    if (!data) {
      return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_POST));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_POST_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};
const postController = {
  getPost,
};

export default postController;
