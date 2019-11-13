import { TestBed } from '@angular/core/testing';

import { ListFacultyService } from './list-faculty.service';

describe('ListFacultyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFacultyService = TestBed.get(ListFacultyService);
    expect(service).toBeTruthy();
  });
});
