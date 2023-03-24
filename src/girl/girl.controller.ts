import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}

  @Get('/add')
  addGirl(@Body() body): any {
    console.log(body);
    return this.girlService.addGirl();
  }

  // // get请求
  // @Get()
  // getGril(): object {
  //   return this.girlService.getGirls();
  // }

  // // post请求
  // @Post('/add')
  // addGirl(): object {
  //   return this.girlService.addGirl();
  // }

  // // get请求接受参数
  // @Get('/getGirlById')
  // getGirlById(@Query() query): object {
  //   let id: number = parseInt(query?.id);
  //   return this.girlService.getGirlById(id);
  // }

  // // post请求接受参数
  // @Post('/addpost')
  // addGirlPost(@Body() body): object {
  //   console.log(body);
  //   return this.girlService.addGirlPost();
  // }

  // // 动态路由
  // @Get('/findGirlById/:id/:name')
  // findGirlById(@Param() params, @Headers() header): object {
  //   console.log(params?.name);
  //   console.log(header);
  //   let id: number = parseInt(params?.id);
  //   return this.girlService.getGirlById(id);
  // }
}
