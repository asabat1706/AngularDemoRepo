import { Injectable } from '@angular/core';

@Injectable()
export class PrintDynamicMessagesService {
    print(message: string): void{ 
        console.log('Dynamic message: '+ message);
    }
}
