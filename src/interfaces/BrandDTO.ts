import { PostDTO } from './PostDTO';
export interface BrandDTO {
    brandId: number;
    brandName: string;
    brandImage: string;
    Post: PostDTO[];
}
