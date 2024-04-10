import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRegistrationErrorComponent } from './applicant-registration-error.component';

describe('ApplicantRegistrationErrorComponent', () => {
  let component: ApplicantRegistrationErrorComponent;
  let fixture: ComponentFixture<ApplicantRegistrationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantRegistrationErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicantRegistrationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
