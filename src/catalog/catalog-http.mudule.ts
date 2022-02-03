import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog.module';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
@Module({
  imports: [CatalogModule],
  providers: [CatalogService],
  controllers: [CatalogController],
})
export class CatalogHttpModule {}
