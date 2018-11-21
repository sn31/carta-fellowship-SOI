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
  investments: any[];
  investmentTotal: number = 0;
  accountTotal: number[] =[];
  constructor(private investmentDataService: InvestmentDataService) {
    this.getInvestmentData(this.date); //Show data on defaul date.
   }
  getInvestmentData(date:string){
    this.investmentDataService.getByDate(date).subscribe(response => {
      this.investments = response.json();
      this.investments.map(investment=>
        this.investmentTotal+= investment["cost"]["$"],
      )
    })
  }
  assetQuantity: number =0;
  getAccountTotal(){
    console.log(this.investments);
    this.investments.map(investment=>
      investment.map(asset=>
        this.assetQuantity += asset["quantity"]
      ),
      this.accountTotal.push(this.assetQuantity),
    )
  }

  date: string = "2018-03-12";
  onChange(dateInput) {
    this.date = dateInput;
    this.investmentTotal = 0;
    this.getInvestmentData(this.date);
    console.log("Reloading the table");
  }
}
