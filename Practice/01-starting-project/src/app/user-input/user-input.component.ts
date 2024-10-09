import { InvestmentService } from './../Investment.service';
import { Component, EventEmitter, inject, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: false,
  //imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    enteredInitialInvestment = signal<string>('0');
    enteredAnnualInvestment = signal<string>("0");
    enteredExpectedReturn = signal<string>("5");
    enteredDuration = signal<string>("10");

    constructor(private InvestmentService : InvestmentService){

    }  

    onSubmit(){
        this.InvestmentService.calculateInvestmentResults({
            initialInvestment : +this.enteredInitialInvestment(), 
            annualInvestment: +this.enteredAnnualInvestment(), 
            expectedReturn: Number(this.enteredExpectedReturn()), 
            duration: Number(this.enteredDuration())
        })

        this.enteredInitialInvestment.set('0')
        this.enteredAnnualInvestment.set('0')
        this.enteredExpectedReturn.set('5')
        this.enteredDuration.set('10')
    }
}
