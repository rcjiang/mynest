import { Body, Controller, Delete, Get, Put, Query } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.entity';

@Controller('genre')
export class GenreController {
  constructor (private readonly genreService: GenreService) {}

  @Get('list')
  async findAll (@Query() query: Genre): Promise<Genre[]> {
    return this.genreService.findAll(query);
  }

  @Put()
  add (@Body() body: Genre): Promise<Genre> {
    return this.genreService.add(body)
  }

  @Delete()
  del (@Query() query: Genre): Promise<void> {
    return this.genreService.remove(query.id)
  }
}
