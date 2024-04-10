import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicantFormComponent } from './app/applicant-form-module/applicant-form/applicant-form.component';
//import { ApplicantFormModule } from './app/applicant-form-module/applicant-form-module';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // platformBrowserDynamic().bootstrapModule(ApplicantFormComponent)
  // .catch(err => console.error(err));
