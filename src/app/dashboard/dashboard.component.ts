import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContryI } from '../shared/model/conry.model';
import { ContryService } from '../shared/service/contry.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contrys: ContryI[]
  forma: FormGroup

  constructor(private contryServ: ContryService,private _snackBar: MatSnackBar) {
    this.contrys = []
    this.forma = new FormGroup({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email, this.validaCorreo]),
      reserva: new FormControl('', [Validators.required, this.validaFecha]),
      pais: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.contryServ.getContrys().subscribe(
      data => {
        const keys: any = Object.keys(data)
        const values: any = Object.values(data)
        for (let key in keys) {
          this.contrys.push({
            value: keys[key],
            contry: values[key]['country']
          })
        }
      })
  }

  validaCorreo(control: FormControl) {
    const value = control.value
    if (value.includes('gmail')) {
      return { gmail: true }
    } else if (value.includes('hotmail')) {
      return { hotmail: true }
    } else
      return  null
  }
  
  validaFecha(control: FormControl) {
    const date = new Date(control.value)
    const dateNow = new Date(Date.now())
    const dateMax = new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate() + 1);
    const dateAfter = new Date(dateNow).setMonth(-9)
    const minDate = new Date(dateAfter)

    if (date.getTime() >= dateMax.getTime()) {
      return { mayor: true }
    }
    else if (date.getTime() < minDate.getTime())
      return { menor: true }
    return null
  }

  onSubmit(): void {
    console.log(this.forma.value)
    this._snackBar.open('Submit!', 'Error', {
      duration: 2000,
    })    
    setTimeout(() => {
      this.clear()
    }, 2000);
  }

  clear() {
    this.forma.reset({
      nombre: '',
      correo: '',
      reserva: '',
      pais: ''
    })
  }
}
