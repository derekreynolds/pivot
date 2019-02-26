import { TestBed } from '@angular/core/testing';

import { CategoryChangeService } from './category-change.service';

describe('Category.ChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryChangeService = TestBed.get(CategoryChangeService);
    expect(service).toBeTruthy();
  });
});
