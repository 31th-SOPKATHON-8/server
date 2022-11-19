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
    return res
      .status(sc.OK)
      .json({ status: 200, message: "유저 조회 성공", data });
  } catch (error) {
    console.log(error);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const createComment = async (req: Request, res: Response) => {
  const { nickname, content, commentCreatedAt, postId } = req.body;
  console.log(nickname, content, commentCreatedAt, postId);
  try {
    const data = await postService.createComment(
      nickname,
      content,
      postId,
      commentCreatedAt
    );
    console.log(data);
    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res
      .status(sc.OK)
      .send(success(sc.OK, rm.INTRODUCTION_SUCCESS, data));
  } catch (e) {
    console.error(e);
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};
const postController = {
  getPost,
  createComment,
};

export default postController;
