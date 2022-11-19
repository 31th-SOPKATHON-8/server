import { PostDTO } from './../interfaces/PostDTO';
import { BrandDTO } from './../interfaces/BrandDTO';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* router -> controller -> service

//* 유저 생성
const getBrandData = async (brandId: number) => {

    const data = await prisma.brand.findMany({
        where: {
            brandId: brandId
        },
        include: {
            Post: true
        }
    });
    return data;
};

const brandService = {
    getBrandData
};

export default brandService;