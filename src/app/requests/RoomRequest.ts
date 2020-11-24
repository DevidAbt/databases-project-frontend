export class RoomRequest {
    public szam: number = null;
    public nev: string = null;
    public ferohely: number = null;
    public gepek_szama: number = null;
  
    constructor(userData: any) {
      Object.keys(this).forEach((key) => {
        if (userData.hasOwnProperty(key) && userData[key] != null && userData[key] !== '') {
          this[key] = userData[key];
        }
      });
    }
  }
  