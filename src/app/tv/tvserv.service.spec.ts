import { TestBed } from '@angular/core/testing';

import { TvservService } from './tvserv.service';

describe('TvservService', () => {
  let service: TvservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
