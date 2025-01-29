import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HardCodedAutheticationService } from '../service/hard-coded-authetication.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  username="root"
  password=""
  errorMessage="invalid credintial"
  invalid:boolean = false

  constructor(private router:Router,private hardcodedAuthetication:HardCodedAutheticationService){}

  handleLogin(){
    if(this.hardcodedAuthetication.authenticate(this.username,this.password)){
      this.router.navigate(["welcome",this.username])
      this.invalid=false

    }else{
      this.invalid=true
    }
    
  }

}
