import { Injectable } from '@angular/core';
import { PrintDynamicMessagesService } from './print-dynamic-messages.service';

@Injectable()
export class MessageFactoryService {
  constructor(printMessage : PrintDynamicMessagesService) {
      return new PrintDynamicMessagesService();
   }
}
