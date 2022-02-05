import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreHttpModule } from './genre/genre-http.mudule';
import { Genre } from './genre/genre.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'rcjia',
    password: '314159',
    database: 'postgres',
    entities: [Genre],
    synchronize: true
  }), GenreHttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
