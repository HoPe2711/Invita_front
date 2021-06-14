import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDocumentComponent } from './sub-document.component';

describe('SubDocumentComponent', () => {
  let component: SubDocumentComponent;
  let fixture: ComponentFixture<SubDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
