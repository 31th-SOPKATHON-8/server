import { Post, PrismaClient } from "@prisma/client";
import internal from "stream";
const prisma = new PrismaClient();

const getPost = async (postId: number) => {
  try {
    const post = await prisma.post.findMany({
      where: {
        postId: postId,
      },
      select: {
        postTitle: true,
        postContent: true,
        postImage: true,
        createdAt: true,
        Comment: {
          select: {
            nickname: true,
            content: true,
            commentCreatedAt: true,
          },
        },
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const createComment = async (
  nickname: string,
  content: string,
  postId: number,
  commentCreatedAt: string
) => {
  const data = await prisma.comment.create({
    data: {
      nickname,
      content,
      postId,
      commentCreatedAt,
    },
  });

  return data;
};

const postService = {
  getPost,
  createComment,
};

export default postService;
