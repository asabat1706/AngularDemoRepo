import { Injectable } from '@angular/core';

@Injectable()
export class LogService2 {
    log(): void{
      console.log("Message from Log Service 2");
    }
}
