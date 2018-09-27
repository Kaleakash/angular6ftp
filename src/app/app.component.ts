import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EmployeeService ]
})
export class AppComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }

  title = 'Leave Management Application';
  employees: Employee[];

  getEmployees(): void {
      this.employeeService.getEmployees().subscribe(employee=>this.employees=employee);
     
  }
   ngOnInit(): void {
    this.getEmployees();
  }
}
