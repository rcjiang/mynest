import { Injectable } from '@nestjs/common';
import { Catalog } from './interface/catalog.interface';

@Injectable ()
export class CatalogsService {
  private readonly catalogs: Catalog[];

  findAll (): Catalog[] {
    return this.catalogs;
  }
}
