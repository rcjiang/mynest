import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalog } from './catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  exports: [TypeOrmModule]
})
export class CatalogModule {}
