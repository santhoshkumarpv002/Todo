import { Component } from '@angular/core';
import { HardCodedAutheticationService } from '../service/hard-coded-authetication.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {


  constructor(public hardCodedAutheticationService:HardCodedAutheticationService){}
ngOnInit(){

this.hardCodedAutheticationService.logout();

}


}
