import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardCodedAutheticationService } from '../service/hard-coded-authetication.service';
import { flush } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
// isuserlogIn:boolean=false;

constructor(public hardCodedAutheticatedService:HardCodedAutheticationService){

}

// ngOnInit(){ //we need referesh
//  this.isuserlogIn=this.hardCodedAutheticatedService.isuserLoggedIn();
// }

  
}
