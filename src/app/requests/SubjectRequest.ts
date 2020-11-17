export class SubjectRequest {
    public targykod: number = null;
    public targynev: string = null;
    public tipus: string = null;
    public hanyadikos: number = null;
  
    constructor(userData: any) {
      Object.keys(this).forEach((key) => {
        if (userData.hasOwnProperty(key) && userData[key] != null && userData[key] !== '') {
          this[key] = userData[key];
        }
      });
    }
  }
  