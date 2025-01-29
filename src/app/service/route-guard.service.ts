import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { HardCodedAutheticationService } from './hard-coded-authetication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(private hardCodedAutheticationService:HardCodedAutheticationService,
  private route:Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.hardCodedAutheticationService.isuserLoggedIn())
      return true;
  
   return this.route.navigate(["login"]);
  }
}
