// jwt-auth.guard.ts
import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    
    if (token) {
      try {
        const payload = this.jwtService.verify(token);
        request.user = payload; // Aquí asignas el usuario al request
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
}
