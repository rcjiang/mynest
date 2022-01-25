import { Controller, Get, Query } from '@nestjs/common';
import { Catalog, CatalogQueryRes } from './dto/Catalog.dto';

@Controller('catalog')
export class CatalogController {
  @Get()
  findAll(@Query() query: Catalog): CatalogQueryRes {
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
