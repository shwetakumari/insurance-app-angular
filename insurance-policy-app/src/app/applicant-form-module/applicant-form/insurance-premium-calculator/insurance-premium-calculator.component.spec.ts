import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePremiumCalculatorComponent } from './insurance-premium-calculator.component';

describe('InsurancePremiumCalculatorComponent', () => {
  let component: InsurancePremiumCalculatorComponent;
  let fixture: ComponentFixture<InsurancePremiumCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurancePremiumCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsurancePremiumCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
