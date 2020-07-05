import { Module } from '@nestjs/common';
import { AulasService } from './aulas/aulas.service';
import { AulasController } from './aulas/aulas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './aulas.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Aula]),
  ],
  providers: [AulasService],
  controllers: [AulasController]
})
export class AulasModule {}
