import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {ApplicantFormModule} from './applicant-form-module/applicant-form-module'
import { ApplicantFormComponent } from './applicant-form-module/applicant-form/applicant-form.component';
import {ApplicantRegistrationErrorComponent} from './applicant-form-module/applicant-form/applicant-registration-error/applicant-registration-error.component';
import {InsurancePremiumCalculatorComponent} from './applicant-form-module/applicant-form/insurance-premium-calculator/insurance-premium-calculator.component'
export const routes: Routes = [
  {path: '', component: ApplicantFormComponent ,title:"home"},
  {path: 'applicant-form', component: ApplicantFormComponent ,title:"home"},
  {path: 'ApplicantRegistrationErrorComponent', component: ApplicantRegistrationErrorComponent ,title:"applicantregistrationerrorcomponent"},
  {path: 'InsurancePremiumCalculatorComponent', component: InsurancePremiumCalculatorComponent ,title:"insurancepremiumcalculatorcomponent"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations:[]
  })
  export class AppRoutingModule { }