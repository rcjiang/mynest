import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.entity';

@Injectable ()
export class GenreService {
  constructor (
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>
  ) {}

  create (body): Promise<Genre> {
    const genre = new Genre();
    genre.name = body.name;
    genre.parent = body.parent;
    return this.genreRepository.save(genre);
  }

  async edit (body): Promise<Genre> {
    const genre = await this.genreRepository.findOne(body.id);
    genre.name = body.name;
    genre.parent = body.parent;
    return this.genreRepository.save(genre);
  }

  async findAll (query: Genre): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  async find (id: number): Promise<Genre> {
    return this.genreRepository.findOneOrFail(id);
  }

  async remove (id: number): Promise<void> {
    await this.genreRepository.delete(id);
  }
}
