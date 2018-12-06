import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { InvestmentDataService } from "../investment-data.service";

@Component({
  selector: "app-investment-table",
  templateUrl: "./investment-table.component.html",
  styleUrls: ["./investment-table.component.css"],
  providers: [InvestmentDataService]
})
export class InvestmentTableComponent {
  investments: any[];
  investmentTotal: number = 0;
  show: boolean = true;
  showInvestmentDict = {};
  showInvestmentDictHistory = {};
  constructor(private investmentDataService: InvestmentDataService) {
    this.getInvestmentData(this.date); //Show data on defaul date.
    this.showInvestmentDictHistory = this.showInvestmentDict;
    
  }
  getInvestmentData(date: string) {
    this.investmentDataService.getByDate(date).subscribe(response => {
      this.investments = response.json();
      this.investments.map(
        investment => (
          (this.showInvestmentDict[investment["name"]] = false),
         
          (this.investmentTotal += investment["cost"]["$"])
        )
      );
    });
  }

  date: string = "2018-03-12";
  onChange(dateInput) {
    this.date = dateInput;
    this.investmentTotal = 0;
    this.getInvestmentData(this.date);
  }
  openDetails(investmentName: string) {
    if (this.show != true)
    {
    this.showInvestmentDict[investmentName] = !this.showInvestmentDict[
      investmentName
    ];
  }
  }

  resetShowInvestmentDict() {
    this.show = false;
    console.log(this.showInvestmentDictHistory);
    this.showInvestmentDict = this.showInvestmentDictHistory;
    console.log(this.showInvestmentDict);
    
  }
}
