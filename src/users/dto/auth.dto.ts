import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @MinLength(4)
  @MaxLength(16)
  readonly username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  readonly password: string;
}
