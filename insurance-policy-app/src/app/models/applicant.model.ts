export class  Applicant {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date; 
    annualIncome: number;
    ifTobaccoUser: number;
    constructor() {
      this.id = 0;
      this.firstName = '';
      this.lastName = '';
      this.dateOfBirth =new Date('1968-11-16T00:00:00');
      this.annualIncome = 0;
      this.ifTobaccoUser = 0;
    }
  }