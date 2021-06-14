import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InvitationCreatorComponent} from './invitation-creator.component';

describe('InvitationCreatorComponent', () => {
  let component: InvitationCreatorComponent;
  let fixture: ComponentFixture<InvitationCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
