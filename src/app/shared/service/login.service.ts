import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginResponseI } from '../model/login-response.model';
import { LoginI } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://ies-webcontent.com.mx/xccm/user/validarUsuario'
  
  user = new EventEmitter<LoginResponseI>()
  userLogin: boolean
  rol: string

  constructor(private http: HttpClient) {
    console.log('Login service is ready!');
    this.userLogin = false
    this.rol = ''
   }

  login( user: string, pass: string) {
    const body: LoginI = {
      usuario: user,
      contrasena: pass
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post<LoginResponseI>(this.url, body, { headers }).pipe(map(
      (data: any) => data['resultado']))
  }


}
