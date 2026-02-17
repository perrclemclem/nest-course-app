import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!';
  }

  getName() : string {
    return 'Clemence Perraudin';
  }

  getJson() {
    return {
      name: 'Elwe',
      lastname: 'Lyra',
      age: 199
    }
  }

  getJson2() {
    return {
      name: 'clem',
      lastname: 'perr',
      age: 19
    }
  }
}

