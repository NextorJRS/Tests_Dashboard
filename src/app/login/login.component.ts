import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new FormControl('', Validators.required)
  pass = new FormControl('', Validators.required)

  constructor(
    private loginServ: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }
  
  ngOnInit(): void {
  }

  clean(): void {
    this.user.reset()
    this.pass.reset()
  }
  
  valid(): boolean {
    if(this.user.invalid || this.pass.invalid)
      return true
    else
      return false
  }

  login() {
    this.loginServ.login(this.user.value,this.pass.value).subscribe(
      status => {
        if (status) {
          if (status.exito) {
            this.loginServ.user.emit(status)
            this.loginServ.userLogin = true
            this.loginServ.rol = status.desc_rol 
            this.router.navigate(['/dashboard'])
          } else {
            this.loginServ.userLogin = false
            this.loginServ.rol = '' 
          }
        } else {
          this.clean()
          this._snackBar.open('Error credentials!', 'Error', {
            duration: 2000,
          })
        }
      }, err =>{
        console.log(err)
      }
    )
  }
}
