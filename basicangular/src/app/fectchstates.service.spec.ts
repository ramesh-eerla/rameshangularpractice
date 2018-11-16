import { TestBed } from '@angular/core/testing';

import { FectchstatesService } from './fectchstates.service';

describe('FectchstatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FectchstatesService = TestBed.get(FectchstatesService);
    expect(service).toBeTruthy();
  });
});
