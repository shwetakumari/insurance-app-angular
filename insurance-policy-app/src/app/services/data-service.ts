import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from '../models/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5237/api/Applicant';
  constructor(private http: HttpClient) { };
  getApplicantData(firstName: string, lastName: string, dateOfBirth: string,annualIncome:string,ifTobaccoUser:string): Observable<Applicant> {
    console.log("inside service")
   // return this.http.get(`${this.apiUrl}`);
    //return this.http.get('http://localhost:5237/api/Applicant?id=1');
    const url  = `${this.apiUrl}/${firstName}/${lastName}/${dateOfBirth}/${annualIncome}/${ifTobaccoUser}`;
    console.log(url);
    return this.http.get<Applicant>(url);
  } 

  createResource(applicant: Applicant): Observable<Applicant> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Applicant>(`${this.apiUrl}`, applicant, { headers });
  }
}
