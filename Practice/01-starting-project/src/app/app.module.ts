import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent, UserInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { 
    
}