import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RoleguardGuard implements CanActivate {
  canActivate(
  ) {
    let role = sessionStorage.getItem('user');
    if (role == "admin") {
      debugger
      return true
    };
    alert("You dont Have ADmin Rights")
    return true;
  }

}
