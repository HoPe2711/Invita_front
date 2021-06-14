import {TestBed} from '@angular/core/testing';

import {TemplateService} from '../../services/template.service';

describe('InvitationCreatorService', () => {
  let service: TemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
