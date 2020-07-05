import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Aula } from '../aulas.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class AulasService {
    constructor(
        @InjectRepository(Aula)
        private aulaRepository: Repository<Aula>,
    ) { }

    async  findAll(): Promise<Aula[]> {
        return await this.aulaRepository.find();
    }

    async  create(aula: Aula): Promise<Aula> {
        return await this.aulaRepository.save(aula);
    }

    async update(aula: Aula): Promise<UpdateResult> {
        return await this.aulaRepository.update(aula.id, aula);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.aulaRepository.delete(id);
    }
}