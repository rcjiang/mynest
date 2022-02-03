import { Controller, Get, Query } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Catalog } from './catalog.entity';

@Controller('catalog')
export class CatalogController {
  constructor (private readonly catalogService: CatalogService) {}

  @Get()
  async findAll(@Query() query: Catalog): Promise<Catalog[]> {
    return this.catalogService.findAll(query);
  }
}
