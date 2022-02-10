import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable ()
export class AuthorService {
  constructor (
    @InjectRepository(Author)
    private authorRepository: Repository<Author>
  ) {}

  add (body): Promise<Author> {
    if (!body.id) {
      return this.create(body);
    }
    return this.edit(body);
  }

  create (body): Promise<Author> {
    const genre = new Author();
    genre.name = body.name;
    return this.authorRepository.save(genre);
  }

  async edit (body): Promise<Author> {
    const { id, name } = body
    const genre = await this.authorRepository.findOne(id);
    genre.name = name;
    return this.authorRepository.save(genre);
  }

  async findAll (query: Author): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async find (id: number): Promise<Author> {
    return this.authorRepository.findOneOrFail(id);
  }

  async remove (id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}