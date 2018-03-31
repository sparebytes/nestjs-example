import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Photo } from './photo.entity';
import { range } from 'lodash';
import { RequestContext } from '@my/api-shared';

@Component()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async create(photo: DeepPartial<Photo>): Promise<any> {
    console.log("Current Request Context", RequestContext.current());
    // return this.photoRepository.manager.transaction(async mgr => {
    //   let lastPhoto = null;

    //   const result = await Promise.all(range(100).map(async () => await this.photoRepository.save(photo)));

    //   return lastPhoto;
    // });
  }
}
