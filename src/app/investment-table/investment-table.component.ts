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
  data: any[] =null;

  constructor(private investmentDataService: InvestmentDataService) { }

  getInvestmentData(date:string){
    this.investmentDataService.getByDate(date).subscribe(response => {
      this.data = response.json();
    })
  }
}
