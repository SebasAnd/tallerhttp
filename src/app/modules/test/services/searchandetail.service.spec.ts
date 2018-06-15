import { TestBed, inject } from '@angular/core/testing';

import { SearchandetailService } from './searchandetail.service';

describe('SearchandetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchandetailService]
    });
  });

  it('should be created', inject([SearchandetailService], (service: SearchandetailService) => {
    expect(service).toBeTruthy();
  }));
});
