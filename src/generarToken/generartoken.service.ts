import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Aquí deberías verificar al usuario en tu base de datos
    if (username === process.env.USER && password === process.env.PASWORD_USER) {
      return { userId: 1, username: process.env.USERNAME };
    }
    return null;
  }

  async login(user: any) {
    console.log(user)
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
