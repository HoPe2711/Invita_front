import { TestBed } from '@angular/core/testing';

import { AdminSectionGuard } from './admin-section.guard';

describe('AdminSectionGuard', () => {
  let guard: AdminSectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminSectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
