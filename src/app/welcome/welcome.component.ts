import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../service/data/welcome.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMsg = '';

  constructor(private route: ActivatedRoute, private welcomeService: WelcomeService) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }


//this is async call
  // getwelcomemsg(){
   

  //   this.welcomeService.getwelcomemsg().subscribe(
  //     (data)=>{ console.log(data);
  //       console.log("ds");
  //     }
  //   );
  //   console.log("last line");
  // }
  // hadlesuccessresponse(response:string){
  //   console.log(response);
  // }

getwelcomemsg(){

this.welcomeService.getwelcomemsg().subscribe(
  (data)=>{ console.log(data);
    this.welcomeMsg=data;},
  (error)=>{console.log(error);
    this.welcomeMsg="something went wrong";
  }
);



}




}

 