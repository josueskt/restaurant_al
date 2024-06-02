import { Injectable } from '@nestjs/common';
import { SqlService } from './sql/slq.service';

@Injectable()
export class AppService {
  constructor(private sql:SqlService){}
  getHello() {

 const asd =   this.sql.query('select * from usr')
 return asd

  }
}
