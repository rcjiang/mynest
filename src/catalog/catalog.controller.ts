import { Controller, Get, Query } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Catalog, CatalogQueryRes } from './dto/Catalog.dto';

@Controller('catalog')
export class CatalogController {
  constructor (private readonly catalogService: CatalogService) {}

  @Get()
  async findAll(@Query() query: Catalog): Promise<CatalogQueryRes> {
    return this.catalogService.findAll(query);
  }
}
