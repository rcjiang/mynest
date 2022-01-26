import { Controller, Get } from '@nestjs/common';

@Controller('content')
export class ContentController {
  @Get()
  findAll() {
    return [];
  }
}
