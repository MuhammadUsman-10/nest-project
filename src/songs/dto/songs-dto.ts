import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';


export class CreateSongsDTO {

  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @IsArray()
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;
}