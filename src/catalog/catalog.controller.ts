import { Controller, Get, Query } from '@nestjs/common';
import { Catalog, CatalogQueryRes } from './dto/Catalog.dto';

@Controller('catalog')
export class CatalogController {
  @Get()
  async findAll(@Query() query: Catalog): Promise<CatalogQueryRes> {
    const id = query.id;
    return {
      list: [],
      match: {
        id: '',
        label: '',
        children: [],
        parents: []
      }
    }
  }
}
