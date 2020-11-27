export class LessonRequest {
    public targykod: number = null;
    public nap: string = null;
    public idopont: number = null;
    public teremszam: number = null;
    public hanyadikos: number = null;
    public A_het: number = null;
    public tipus: string = null;
    public old_targykod: number = null;
    public old_nap: string = null;
    public old_idopont: number = null;
  
    constructor(userData: any) {
      Object.keys(this).forEach((key) => {
        if (userData.hasOwnProperty(key) && userData[key] != null && userData[key] !== '') {
          this[key] = userData[key];
        }
      });
    }
  }
  