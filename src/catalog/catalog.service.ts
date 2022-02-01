import { Injectable } from '@nestjs/common';
import { Catalog, CatalogsWithMatch } from './interface/catalog.interface';

@Injectable ()
export class CatalogService {
  private readonly catalogsWithMatch: CatalogsWithMatch;

  findAll (query: Catalog): CatalogsWithMatch {
    return this.catalogsWithMatch;
  }
}
