import { Component, Inject } from '@angular/core';
import { MessageFactoryService } from '../message-factory.service';
import { PrintDynamicMessagesService } from '../print-dynamic-messages.service';

@Component({
  selector: 'app-use-factory',
  standalone: true,
  imports: [],
  templateUrl: './use-factory.component.html',
  styleUrl: './use-factory.component.css',
  providers: [
    PrintDynamicMessagesService,
    {
      provide: 'DYNAMIC_MSG',
      useFactory : (printMsg : PrintDynamicMessagesService)=>{
        return new MessageFactoryService(printMsg);
      },
      deps : [PrintDynamicMessagesService]
    }
  ]
})
export class UseFactoryComponent {
    constructor(@Inject('DYNAMIC_MSG') printMsg: PrintDynamicMessagesService){
      printMsg.print('This is a custom print message from factory');
    }
}
