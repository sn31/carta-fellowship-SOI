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
    this.getInvestmentData("2018-11-14"); 
   }

  getInvestmentData(date:string){
    this.investmentDataService.getByDate(date).subscribe(response => {
      this.investments = response.json();
      console.log(this.investments);
    })
  }
}
