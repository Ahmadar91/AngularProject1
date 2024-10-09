import { InvestmentService } from './../Investment.service';
import { Component, input, Input, inject, computed } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  standalone: false,
 // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  
    private readonly InvestmentService = inject(InvestmentService);


    results = this.InvestmentService.resultsData.asReadonly();
}
