import { IsEnum, IsString } from "class-validator";
import { Category } from "src/common/category.enum";

export class ConfessionDto {
    @IsString()
    content: string;

    @IsEnum(Category)
    category: string;
}