export class StudentRequest {
    public diakig: string = null;
    public nev: string = null;
    public szul_datum: Date = null;
    public iranyitoszam: number = null;
    public utca: string = null;
    public hazszam: number = null;
    public hanyadikos: number = null;
  
    constructor(userData: any) {
      Object.keys(this).forEach((key) => {
        if (userData.hasOwnProperty(key) && userData[key] != null && userData[key] !== '') {
          this[key] = userData[key];
        }
      });
    }
  }
  