import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBoardDto {
  @IsNotEmpty()
  readonly title?: string;

  @IsString()
  readonly description?: string;
}
