import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from  '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //intégration de swagger pour la documentaion de l'api
  /*
  * @setTitle : titre 
  * @setDescription : description of api
  * @setVersion : version
  * @addTag : Tag of API
  */
  const config = new DocumentBuilder()
      .setTitle('Asma API')
      .setDescription('The Asma API version 1.0')
      .setVersion('1.0')
      .addTag('Asma')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
