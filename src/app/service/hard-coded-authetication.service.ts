import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAutheticationService {

  constructor() { }

  authenticate(username:string,password:string){

    // console.log("before loggin - "+this.isuserLoggedIn());
    if(username==="nike"&&password==="nikemike"){
      sessionStorage.setItem("authenticateduser",username);
      // console.log("after loggin - "+this.isuserLoggedIn());
      return true;
    }
    return false;
  }


  isuserLoggedIn(){
let user=sessionStorage.getItem("authenticateduser");
// console.log("invokedd");
return !(user===null);

  }


  logout(){
    sessionStorage.removeItem("authenticateduser");
  }
}
