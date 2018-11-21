import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {InvestmentDataService} from '../investment-data.service';

@Component({
  selector: 'app-investment-table',
  templateUrl: './investment-table.component.html',
  styleUrls: ['./investment-table.component.css'],
  providers: [InvestmentDataService]
})
export class InvestmentTableComponent {
  investments: any[] =null;
  constructor(private investmentDataService: InvestmentDataService) {
    this.getInvestmentData(this.date); //Show data on defaul date.
   }

  getInvestmentData(date:string){
    this.investmentDataService.getByDate(date).subscribe(response => {
      this.investments = response.json();
      console.log(this.investments);
    })
  }

  date: string = "2018-11-01";
  onChange(dateInput) {
    this.date = dateInput;
    this.getInvestmentData(this.date);
    console.log("Reloading the table");
  }
}
