import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobaccouserRegistrationComponent } from './tobaccouser-registration.component';

describe('TobaccouserRegistrationComponent', () => {
  let component: TobaccouserRegistrationComponent;
  let fixture: ComponentFixture<TobaccouserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TobaccouserRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TobaccouserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
