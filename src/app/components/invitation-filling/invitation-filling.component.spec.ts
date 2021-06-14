import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InvitationFillingComponent} from './invitation-filling.component';

describe('InvitationFillingComponent', () => {
  let component: InvitationFillingComponent;
  let fixture: ComponentFixture<InvitationFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationFillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
