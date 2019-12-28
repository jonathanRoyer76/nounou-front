import { TestBed } from '@angular/core/testing';

import { TypesPersonService } from './typesPerson.service';

describe('TypesPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypesPersonService = TestBed.get(TypesPersonService);
    expect(service).toBeTruthy();
  });
});
