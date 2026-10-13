import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function startOnPort(port: number) {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  });

  await app.listen(port);
  return app;
}

async function bootstrap() {
  const preferredPort = Number(process.env.PORT ?? 3000);
  const basePort = Number.isFinite(preferredPort) ? preferredPort : 3000;
  const maxAttempts = 10;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const port = basePort + attempt;

    try {
      await startOnPort(port);
      return;
    } catch (error: any) {
      if (error?.code !== 'EADDRINUSE') {
        throw error;
      }

      console.warn(`Port ${port} is already in use. Retrying on ${port + 1}...`);
    }
  }

  throw new Error(
    `Could not start the backend. Ports ${basePort}-${basePort + maxAttempts - 1} are all occupied.`,
  );
}

await bootstrap();
