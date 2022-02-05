import { Module } from '@nestjs/common';
import { GenreModule } from './genre.module';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
@Module({
  imports: [GenreModule],
  providers: [GenreService],
  controllers: [GenreController],
})
export class GenreHttpModule {}
