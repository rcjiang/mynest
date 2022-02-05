import { Controller, Get, Query } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.entity';

@Controller('genre')
export class GenreController {
  constructor (private readonly catalogService: GenreService) {}

  @Get()
  async findAll(@Query() query: Genre): Promise<Genre[]> {
    return this.catalogService.findAll(query);
  }
}
