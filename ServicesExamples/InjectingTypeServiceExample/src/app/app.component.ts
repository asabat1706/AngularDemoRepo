import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogService2 } from './log-service2.service';
import { StringTokenComponent } from './string-token/string-token.component';
import { TokenInjectionComponent } from './token-injection/token-injection.component';
import { UseValueComponent } from './use-value/use-value.component';
import { UseFactoryComponent } from './use-factory/use-factory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StringTokenComponent, TokenInjectionComponent, UseValueComponent, UseFactoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: LogService2
    }
  ]

})
export class AppComponent {
  constructor(private service: LogService2){
    service.log();   
  }
}
