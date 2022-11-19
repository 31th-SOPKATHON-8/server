import { PrismaClient } from "@prisma/client";
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

const postService = {
  getPost,
};

export default postService;
