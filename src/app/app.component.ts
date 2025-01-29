import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'; 
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,FooterComponent,MenuComponent],
  // template:'<h1>this is my name - {{name}}</h1>'
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  name="JackEnnumNaaN";
}
