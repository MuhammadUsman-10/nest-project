import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from './schemas/song.schema';
import { CreateSongsDTO } from './dto/songs-dto';

@Injectable()
export class SongsService {

  constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>) {}

  async create(song: CreateSongsDTO): Promise<Song> {
    const newSong = new this.songModel(song);
    return newSong.save();
  }

  async findAll(): Promise<Song[]> {
    return await this.songModel.find().exec();
  }

  async findOne(id: string): Promise<Song> {
    const song = await this.songModel.findById(id).exec();
    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return song;
  }

  async update(id: string, updateSong: CreateSongsDTO): Promise<Song> {
    const updatedSong = await this.songModel
      .findByIdAndUpdate(id, updateSong, { new: true })
      .exec();
    if (!updatedSong) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return updatedSong;
  }

  async delete(id: string): Promise<Song> {
    const deletedSong = await this.songModel.findByIdAndDelete(id).exec();
    if (!deletedSong) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return deletedSong;
  }
}
