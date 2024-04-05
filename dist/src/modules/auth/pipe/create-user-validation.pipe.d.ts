import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { CreateUserDTO } from "../dto/user.dto";
export declare class CreateUserValidationPipe implements PipeTransform {
    transform(data: CreateUserDTO, metadata: ArgumentMetadata): CreateUserDTO;
}
