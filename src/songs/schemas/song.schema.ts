import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SongDocument = Song & Document;

@Schema()
export class Song {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, type: [String] })
  artists: string[];

  @Prop({ required: true })
  releasedDate: Date;

  @Prop({ required: true })
  duration: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
