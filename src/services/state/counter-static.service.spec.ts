import { TestBed } from '@angular/core/testing';

import { CounterStaticService } from './counter-static.service';

describe('CounterStaticService', () => {
  let service: CounterStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
