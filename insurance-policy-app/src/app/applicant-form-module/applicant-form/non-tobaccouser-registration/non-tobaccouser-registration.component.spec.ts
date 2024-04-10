import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTobaccouserRegistrationComponent } from './non-tobaccouser-registration.component';

describe('NonTobaccouserRegistrationComponent', () => {
  let component: NonTobaccouserRegistrationComponent;
  let fixture: ComponentFixture<NonTobaccouserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonTobaccouserRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonTobaccouserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
