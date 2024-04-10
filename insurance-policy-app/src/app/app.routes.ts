import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {ApplicantFormModule} from './applicant-form-module/applicant-form-module'
import { ApplicantFormComponent } from './applicant-form-module/applicant-form/applicant-form.component';
import { TobaccouserRegistrationComponent } from './applicant-form-module/applicant-form/tobaccouser-registration/tobaccouser-registration.component';
import { NonTobaccouserRegistrationComponent } from './applicant-form-module/applicant-form/non-tobaccouser-registration/non-tobaccouser-registration.component';
import {ApplicantRegistrationErrorComponent} from './applicant-form-module/applicant-form/applicant-registration-error/applicant-registration-error.component'
export const routes: Routes = [
  {path: '', component: ApplicantFormComponent ,title:"home"},
  {path: 'applicant-form', component: ApplicantFormComponent ,title:"home"},
  {path: 'tobaccouseregistration', component: TobaccouserRegistrationComponent ,title:"tobaccouseregistration"},
  {path: 'nontobaccouseregistration', component: NonTobaccouserRegistrationComponent ,title:"nontobaccouseregistration"},
  {path: 'ApplicantRegistrationErrorComponent', component: ApplicantRegistrationErrorComponent ,title:"applicantregistrationerrorcomponent"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations:[]
  })
  export class AppRoutingModule { }