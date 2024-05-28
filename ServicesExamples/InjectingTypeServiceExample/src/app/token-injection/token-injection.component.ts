import { Component, Inject } from '@angular/core';
import { LogService2 } from '../log-service2.service';

@Component({
  selector: 'app-token-injection',
  standalone: true,
  imports: [],
  templateUrl: './token-injection.component.html',
  styleUrl: './token-injection.component.css',
  providers: [{
    provide: 'LOG_MSG_TOKEN', useClass: LogService2
  }]
})
export class TokenInjectionComponent {
    constructor(@Inject('LOG_MSG_TOKEN') private logger: LogService2){
        this.logger.log();
    }
}
