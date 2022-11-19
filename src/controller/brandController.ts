import { PostDTO } from './../interfaces/PostDTO';
import { BrandDTO } from './../interfaces/BrandDTO';
import { Request, Response } from "express";
import brandService from '../service/brandService';

const getBrandData = async (req: Request, res: Response) => {
    const { brandId } = req.params;
    console.log(brandId);

    const data = await brandService.getBrandData(+brandId);

    if (!data) {
        return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }
    return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const brandController = {
    getBrandData,
};

export default brandController;
