import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance-premium-calculator',
  templateUrl: './insurance-premium-calculator.component.html',
  standalone: true,
  styleUrls: ['./insurance-premium-calculator.component.css'],
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule]
})
export class InsurancePremiumCalculatorComponent implements OnInit {
  insuranceForm!: FormGroup;
  premiumCalculated = false;
  calculatedPremium!: number;
  isTobaccoUser: any;
  showYearsOfSmoking!: boolean;
  private tobaccoUserSubscription!: Subscription;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute) {
    this.showYearsOfSmoking = false;
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isTobaccoUser=params["isTobaccoUser"]=="0"?false:true;
    });
    this.insuranceForm = this.formBuilder.group({
      age: ["", [Validators.required, Validators.min(18), Validators.max(100)]],
      gender: ['male', Validators.required],
      yearsOfSmoking: [""]
    });
  }

  calculatePremium(): void {
    if(this.premiumCalculated) 
      this.premiumCalculated = false
    if (this.insuranceForm.valid) {
      const age = this.insuranceForm.value.age;
      const gender = this.insuranceForm.value.gender;
      const yearsOfSmoking = this.insuranceForm.value.yearsOfSmoking || 0;

      let basePremium = 100; // Base premium amount

      // Adjust premium based on age
      if (age >= 18 && age <= 30) {
        basePremium -= 10;
      } else if (age > 30 && age <= 50) {
        basePremium += 20;
      } else if (age > 50) {
        basePremium += 50;
      }

      // Adjust premium based on gender
      if (gender === 'female') {
        basePremium -= 5;
      }
      // Adjust premium based on smoking status and years of smoking
      // if (smoker) {
        if (true) {
        basePremium += 50; // Additional premium for smokers
        if (yearsOfSmoking >= 10) {
          basePremium += 30; // Additional premium for long-term smokers
        }
      }

      this.calculatedPremium = basePremium;
      this.premiumCalculated = true;
    }
  }
}
