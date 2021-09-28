import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MapasService } from './mapas.service';
import { CreatePointDto } from './dto/create-point.dto';
import { CreateAreaDto } from './dto/create-area.dto';

@Controller()
export class MapasController {
  constructor(private readonly mapasService: MapasService) {}

  @MessagePattern('createPoint')
  async create(@Payload() createPointDto: CreatePointDto) {
    const id = await this.mapasService.create(createPointDto);
    return { id };
  }

  @MessagePattern('getPoint')
  async getPoint(@Payload() id: string) {
    return this.mapasService.getPoint(id);
  }

  @MessagePattern('deletePoint')
  async deletePoint(@Payload() id: string) {
    await this.mapasService.deletePoint(id);
    return true;
  }

  @MessagePattern('createArea')
  async createArea(@Payload() createAreaDto: CreateAreaDto) {
    const id = await this.mapasService.createArea(createAreaDto);
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
