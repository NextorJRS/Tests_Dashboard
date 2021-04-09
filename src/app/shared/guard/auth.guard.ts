import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginServ: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let rol = this.loginServ.rol
      
      if(rol !='') {
        if(!this.loginServ.userLogin || rol != 'DISTRIBUIDOR') {
          this.router.navigate(['/home'])
          this._snackBar.open('Access Denied', 'Error', {
            duration: 2000,
          })
          return false
        } else {
          this._snackBar.open('Welcome ' + rol, 'success', {
            duration: 2000,
          })
          return true
        }
      } else {
        this._snackBar.open('Need login', 'Error', {
          duration: 2000,
        })
        this.router.navigate(['/login'])
        return false
      }
  }
  
}
