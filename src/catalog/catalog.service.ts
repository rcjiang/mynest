import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './catalog.entity';

@Injectable ()
export class CatalogService {
  constructor (
    @InjectRepository(Catalog)
    private catalogRepository: Repository<Catalog>
  ) {}

  create (body): Promise<Catalog> {
    const catalog = new Catalog();
    catalog.name = body.name;
    catalog.parent = body.parent;
    return this.catalogRepository.save(catalog);
  }

  async edit (body): Promise<Catalog> {
    const catalog = await this.catalogRepository.findOne(body.id);
    catalog.name = body.name;
    catalog.parent = body.parent;
    return this.catalogRepository.save(catalog);
  }

  async findAll (query: Catalog): Promise<Catalog[]> {
    return this.catalogRepository.find();
  }

  async find (id: number): Promise<Catalog> {
    return this.catalogRepository.findOneOrFail(id);
  }

  async remove (id: number): Promise<void> {
    await this.catalogRepository.delete(id);
  }
}
