import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const swaggerConfig = new DocumentBuilder()
    .setTitle("Hydrogen storeback API")
    .setDescription("Hydrogen storeback API description")
    .setVersion("0.1")
    .build()

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup("api/docs", app, swaggerDocument)

  app.setGlobalPrefix("api")

  const port = process.env.PORT || 4000
  await app.listen(port)
}
bootstrap().then(() => null)
