import { PostDTO } from "./../interfaces/PostDTO";
import { BrandDTO } from "./../interfaces/BrandDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* router -> controller -> service

//* 유저 생성
const getBrandData = async (brandId: number) => {

    const data = await prisma.brand.findUnique({
        where: {
            brandId
        },
        include: {
            Post: {
                select: {
                    postId: true,
                    postTitle: true,
                    postContent: true,
                    createdAt: true,
                    postImage: true,
                    postComment: true,
                    postLike: true,
                },
            }
        }
    });
    return data;
};

const brandService = {
    getBrandData,
};

export default brandService;
