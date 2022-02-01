import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogController } from './catalog/catalog.controller';
import { CatalogService } from './catalog/catalog.service';

@Module({
  imports: [],
  controllers: [AppController, CatalogController],
  providers: [AppService, CatalogService],
})
export class AppModule {}
