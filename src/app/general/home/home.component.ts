import { Component, OnInit } from '@angular/core';
import { ARRAY } from 'src/app/shared/constants/array.const';
import { ARRAY2 } from 'src/app/shared/constants/array2';
import { OBJECT } from 'src/app/shared/constants/object.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log('Array 1°', ARRAY)
    this.changeArray(ARRAY)
    console.log('Array 2°', ARRAY)
    this.changeArray(ARRAY2)
    console.log('Objeto', OBJECT)
    this.changeObject(OBJECT)
  }

  ngOnInit(): void {
  }

  changeArray(array: any[]) {
    const newObj = array.map(
      function (obj) {
        let rObj: any = {};
        rObj[obj.name] = obj.value;
        return rObj;
      }
    )
    console.log('Result', newObj)
    return newObj
  }

  changeObject(objeto: any) {
    let newArray = [{}]
    for(let key in objeto) {
      newArray.push({
        value: objeto[key],
        name: key
      })
    }
    console.log('Resul Array', newArray)
    return newArray
  }

}
