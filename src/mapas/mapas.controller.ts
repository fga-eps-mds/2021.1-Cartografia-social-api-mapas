import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MapasService } from './mapas.service';
import { CreatePointDto } from './dto/create-point.dto';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { MediaRelationDto } from './dto/media-relation.dto';

@Controller()
export class MapasController {
  constructor(private readonly mapasService: MapasService) {}

  @MessagePattern('createPoint')
  async createPoint(@Payload() createPointDto: CreatePointDto) {
    const id = await this.mapasService.createPoint(createPointDto);
    return { id };
  }

  @MessagePattern('updatePoint')
  async updatePoint(@Payload() updatePointDto: UpdatePointDto) {
    const id = await this.mapasService.updatePoint(updatePointDto);
    return { id };
  }

  @MessagePattern('getPoint')
  async getPoint(@Payload() id: string) {
    return this.mapasService.getPointWithMidia(id);
  }

  @MessagePattern('deletePoint')
  async deletePoint(@Payload() id: string) {
    await this.mapasService.deletePoint(id);
    return true;
  }

  @MessagePattern('addMediaToPoint')
  async addMediaToPoint(@Payload() mediaRelationDto: MediaRelationDto) {
    await this.mapasService.addMediaToPoint(mediaRelationDto);
    return true;
  }

  @MessagePattern('removeMediaFromPoint')
  async removeMidiaToPoint(@Payload() mediaRelationDto: MediaRelationDto) {
    await this.mapasService.deleteMediaFromPoint(mediaRelationDto);
    return true;
  }

  @MessagePattern('createArea')
  async createArea(@Payload() createAreaDto: CreateAreaDto) {
    const id = await this.mapasService.createArea(createAreaDto);
    return { id };
  }

  @MessagePattern('updateArea')
  async updateArea(@Payload() updateAreaDto: UpdateAreaDto) {
    const id = await this.mapasService.updateArea(updateAreaDto);
    return { id };
  }

  @MessagePattern('getArea')
  async getArea(@Payload() id: string) {
    return this.mapasService.getArea(id);
  }

  @MessagePattern('deleteArea')
  async deleteArea(@Payload() id: string) {
    await this.mapasService.deleteArea(id);
    return true;
  }
}
