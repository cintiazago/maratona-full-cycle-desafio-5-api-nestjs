import { Controller, Get } from '@nestjs/common';
import { Aula } from '../aulas.entity';
import { AulasService } from './aulas.service';
import { Post, Delete, Param, Body } from  '@nestjs/common';

@Controller('maratona')
export class AulasController {
    constructor(private aulasService: AulasService){}

    @Get()
    index(): Promise<Aula[]> {
      return this.aulasService.findAll();
    }

    @Post('create')
    async create(@Body() aulaData: Aula): Promise<any> {
      return this.aulasService.create(aulaData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      return this.aulasService.delete(id);
    }  
}
