import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListTodosComponentComponent } from '../list-todos-component/list-todos-component.component';


@Component({
  selector: 'app-welcome',
  imports: [ListTodosComponentComponent,RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name=''
constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  this.name = this.route.snapshot.params['name']; // Assign name here
}

}
