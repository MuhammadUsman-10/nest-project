import { 
  Controller, 
  Get,
  Put, 
  Delete,
  Post, 
  Body, 
  Param 
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/songs-dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createSongsDTO: CreateSongsDTO) {
    return this.songsService.create(createSongsDTO);
    // return 'Create a new song';
  }

  @Get()
  async findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // return 'Fetch song based on id';
    return this.songsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateSongsDTO) {
    // return 'Update song based on id';
    return this.songsService.update(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    // return 'Delete song based on id';
    return this.songsService.delete(id);
  }
}
