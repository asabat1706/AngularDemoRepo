import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [EmployeeService]
})
export class AppComponent {
  employees: any;
  currentEmpId: number = -1;
  constructor(private empService: EmployeeService){
      this.employees = empService.getEmployeeData();
  }

  getEmp(id: number){
    this.currentEmpId = id;
  }
}
