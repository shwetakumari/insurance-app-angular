import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { DataService } from '../../services/data-service';
import { RouterOutlet ,Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Applicant } from '../../models/applicant.model'

import { Observable,Subscription  } from 'rxjs';
@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  standalone: true,
  styleUrls: ['./applicant-form.component.css'],
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule]
})
export class ApplicantFormComponent implements OnInit{

  dateValidator(): import("@angular/forms").ValidatorFn {
    throw new Error('Method not implemented.');
  }
  applicant!: Applicant;
  newapplicant!: Applicant;
  errorMessage!: string;
  applicant$!: Observable<Applicant>;
  isTobaccoUser!: string;

  applicantForm: FormGroup=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    dateOfBirth:  new FormControl('', Validators.compose([Validators.required])),
    annualIncome: new FormControl('', Validators.compose([Validators.required, Validators.min(100)])),
    ifTobaccoUser: new FormControl('',Validators.required),
  });

  constructor(private fb: FormBuilder,private dataservice :DataService,private route:Router) { }
  ngOnInit(): void {

  }    
    onSave(event:any){
      
      this.applicant = new Applicant();
      this.applicant.firstName=event.value.firstName;
      this.applicant.lastName=event.value.lastName;
      this.applicant.dateOfBirth=event.value.dateOfBirth;
      this.applicant.annualIncome=event.value.annualIncome;
      this.applicant.ifTobaccoUser=event.value.ifTobaccoUser == "1" ? 1: 0;
      console.log("here"+this.applicant.ifTobaccoUser)
      this.dataservice.createResource(this.applicant).subscribe({
                    next: (data: Applicant) => {
                        this.applicant = data;
                    } ,
                  error: (e) => {
                    if(e.status!="200")
                    this.redirectionToError();
                   }
                  })
                  this.isTobaccoUser=String(this.applicant.ifTobaccoUser);
                  ///this.tobaccoUserService.setIsTobaccoUser(this.applicant.ifTobaccoUser);
                  this.redirectionToRegisteration(String(this.applicant.ifTobaccoUser));
  }
redirectionToRegisteration(ifTobbaccoUser:string){
    //this.route.navigateByUrl('InsurancePremiumCalculatorComponent');
    this.route.navigate(['InsurancePremiumCalculatorComponent'], { queryParams: { isTobaccoUser: this.isTobaccoUser } });
    //this.route.navigate(['InsurancePremiumCalculatorComponent'], { state: { isTobaccoUser: this.isTobaccoUser } });
    } 
redirectionToError() {
  this.route.navigateByUrl('ApplicantRegistrationErrorComponent');
}
} 
