import { Injectable } from '@angular/core';

@Injectable()
export class LogService1 {
  log(): void{
    console.log("Message from Log Service 1");
  }
}
