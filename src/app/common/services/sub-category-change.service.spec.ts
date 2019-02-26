import { TestBed } from '@angular/core/testing';

import { SubCategoryChangeService } from './sub-category-change.service';

describe('SubCategoryChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubCategoryChangeService = TestBed.get(SubCategoryChangeService);
    expect(service).toBeTruthy();
  });
});
