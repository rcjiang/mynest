import { Controller, Get, Post } from '@nestjs/common';

@Controller('content')
export class ContentController {
  @Get()
  findAll () {
    return [];
  }

  @Post() 
  edit () {
  }
}
