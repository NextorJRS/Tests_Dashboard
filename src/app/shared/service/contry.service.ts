import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContryService {

  url = 'https://api.first.org/data/v1/countries?region=africa&limit=10&pretty=true'
  
  
  constructor(private http: HttpClient) {
    console.log('Contry service is ready!');
   }

  getContrys() {
    return this.http.get(this.url).pipe(map(
      (data: any) => data['data']))
  }


}
