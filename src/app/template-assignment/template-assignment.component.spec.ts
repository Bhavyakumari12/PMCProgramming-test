import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAssignmentComponent } from './template-assignment.component';

describe('TemplateAssignmentComponent', () => {
  let component: TemplateAssignmentComponent;
  let fixture: ComponentFixture<TemplateAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateAssignmentComponent]
    });
    fixture = TestBed.createComponent(TemplateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
