import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginResponseI } from 'src/app/shared/model/login-response.model';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hidden = false
  user: LoginResponseI = {
    exito: false
  }

  constructor(
    private loginServ: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loginServ.user.subscribe(us => {
      this.user = us
    })
  }

  toggleBadge() {
    this.hidden = !this.hidden
  }

  logout(): void {
    const userOff: LoginResponseI = {
      exito: false,
      desc_rol: '',
      id: -1,
      id_rol: -1
    }
    this.loginServ.user.emit(userOff)
    this.loginServ.userLogin = false
    this.loginServ.rol = ''
    this._snackBar.open('Good Bye !', ':D', {
      duration: 2000,
    })
    this.router.navigate(['home'])
  }

}
