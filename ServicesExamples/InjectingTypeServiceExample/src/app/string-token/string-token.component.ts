import { Component, Inject } from '@angular/core';
import { LogService1 } from '../log-service1.service';

@Component({
  selector: 'app-string-token',
  standalone: true,
  imports: [],
  templateUrl: './string-token.component.html',
  styleUrl: './string-token.component.css',
  providers: [
    {provide: 'STR_LOG', useClass: LogService1}
  ]
})
export class StringTokenComponent {
    constructor(@Inject('STR_LOG') private logger: LogService1){
      logger.log();
    }
}
