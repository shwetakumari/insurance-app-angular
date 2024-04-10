import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }
  navigateToNonTobaccoRegistration(): void {
    console.log('reaching here')
    this.router.navigateByUrl('/nontobaccouseregistration');
  }
  navigateToTobaccoRegistration(): void {
    this.router.navigateByUrl('/tobaccoregistration');
  }
}
