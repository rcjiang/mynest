import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogHttpModule } from './catalog/catalog-http.mudule';
import { Catalog } from './catalog/catalog.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'rcjia',
    password: '314159',
    database: 'postgres',
    entities: [Catalog],
    synchronize: true
  }), CatalogHttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
