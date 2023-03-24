import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  constructor(
    @InjectRepository(Girl)
    private readonly girl: Repository<Girl>,
  ) {}

  addGirl() {
    const data = new Girl();
    data.name = '大力';
    data.age = 24;
    data.skill = '打篮球';
    return this.girl.save(data);
  }

  // getGirls(): object {
  //   return {
  //     code: 200,
  //     data: ['xiaohong', 'xiaoli', 'xiaoming'],
  //     msg: 'success',
  //   };
  // }
  // addGirl(): object {
  //   return {
  //     code: 200,
  //     data: { id: 4, name: 'dali', age: 24 },
  //     msg: 'success',
  //   };
  // }
  // getGirlById(id: number): any {
  //   let resJSON: any = {};
  //   switch (id) {
  //     case 1:
  //       resJSON = { id: 1, name: 'xiaohong', age: 18 };
  //       break;
  //     case 2:
  //       resJSON = { id: 2, name: 'xiaoli', age: 23 };
  //       break;
  //     case 3:
  //       resJSON = { id: 3, name: 'xiaolv', age: 25 };
  //       break;
  //   }
  //   return resJSON;
  // }
  // addGirlPost(): object {
  //   return {
  //     code: 200,
  //     data: { id: 4, name: 'GirlPost', age: 24 },
  //     msg: 'success',
  //   };
  // }
}
