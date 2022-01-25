import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentController } from './content/content.controller';

@Module({
  imports: [],
  controllers: [AppController, ContentController],
  providers: [AppService],
})
export class AppModule {}
