import {
  Body,
  Controller,
  Logger,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from './users.service';
import { User } from './users.decorator';
import { AuthGuard } from './users.guard';

@Controller('users')
export class UsersController {
  private logger = new Logger('Users');

  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signUp(@Body(ValidationPipe) authDto: AuthDto): Promise<void> {
    return this.usersService.signUp(authDto);
  }

  @Post('signin')
  signIn(
    @Body(ValidationPipe) authDto: AuthDto,
  ): Promise<{ accessToken: string }> {
    return this.usersService.signIn(authDto);
  }

  @Post('test')
  @UseGuards(AuthGuard)
  test(@User('exp') data: string) {
    this.logger.verbose(`Test AuthGuard, data: ${data}`);
  }
}
