import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración personalizada de CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Permite solicitudes solo desde este origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Encabezados permitidos
    credentials: true, // Permite el envío de credenciales como cookies
  });
  const config = new DocumentBuilder()
    .setTitle('NestJS Auth API')
    .setDescription('API con autenticación JWT')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
