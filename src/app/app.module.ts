import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { InvestmentTableComponent } from './investment-table/investment-table.component';


@NgModule({
  declarations: [
    AppComponent,
    InvestmentTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
