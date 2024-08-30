import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './generartoken.service';
import { LoginDto } from './dto/login.dto'; // Importa el DTO
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('auth') // Para organizar las rutas en Swagger
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginDto }) // Documenta el cuerpo de la solicitud en Swagger
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
