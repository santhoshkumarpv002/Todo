import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponentComponent } from './list-todos-component/list-todos-component.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:"todo",component:ListTodosComponentComponent,canActivate:[RouteGuardService]},
    {path:"welcome/:name",component:WelcomeComponent,canActivate:[RouteGuardService]},
    {path:"logout",component:LogoutComponent,canActivate:[RouteGuardService]},
    {path:"",component:LoginComponent},
    {path:"**",component:ErrorComponent}
        
];
