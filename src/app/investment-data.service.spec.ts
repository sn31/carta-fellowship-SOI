import { TestBed, inject } from '@angular/core/testing';

import { InvestmentDataService } from './investment-data.service';

describe('InvestmentDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentDataService]
    });
  });

  it('should be created', inject([InvestmentDataService], (service: InvestmentDataService) => {
    expect(service).toBeTruthy();
  }));
});
