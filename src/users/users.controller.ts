import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: Request) {
    const user = req.user as { userId: string; email: string };
    if (!user) {
      throw new Error('User not found');
    }
    // const userId = req.user.userId;
    return await this.usersService.findById(user.userId);
    // return user;
  }
}
