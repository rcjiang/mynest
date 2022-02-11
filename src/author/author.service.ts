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
    const author = new Author();
    author.name = body.name;
    return author.save();
  }

  async edit (body): Promise<Author> {
    const { id, name } = body
    const author = await Author.findOne(id);
    author.name = name;
    return author.save();
  }

  async findAll (query: Author): Promise<Author[]> {
    return Author.find();
  }

  async find (id: number): Promise<Author> {
    return Author.findOneOrFail(id);
  }

  async remove (id: number): Promise<void> {
    await Author.delete(id);
  }
}