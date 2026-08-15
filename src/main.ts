import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

const MAX_PORT_ATTEMPTS = 10;

async function listenWithPortFallback(
  app: NestExpressApplication,
  startPort: number,
) {
  let port = startPort;
  for (let attempt = 1; attempt <= MAX_PORT_ATTEMPTS; attempt++) {
    try {
      await app.listen(port);
      return port;
    } catch (err) {
      const isPortBusy = (err as NodeJS.ErrnoException)?.code === 'EADDRINUSE';
      if (!isPortBusy || attempt === MAX_PORT_ATTEMPTS) throw err;
      console.warn(`Puerto ${port} ocupado, probando ${port + 1}...`);
      port += 1;
    }
  }
  throw new Error('No se encontró un puerto disponible');
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'src', 'public'));
  const basePort = Number(process.env.PORT) || 3000;
  const port = await listenWithPortFallback(app, basePort);
  console.log(`Aplicación escuchando en http://localhost:${port}`);
}
void bootstrap();
