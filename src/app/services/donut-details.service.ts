import { Injectable } from '@angular/core';
import { DonutDetails } from '../models/donut-details';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonutDetailsService {
  donutResult: any;

 

  constructor(private http:HttpClient) { }
getDetails(donut:string):Observable<DonutDetails>{
  return this.http.get<DonutDetails>(`https://grandcircusco.github.io/demo-apis/donuts/3.json`)
}
getById(id:number):DonutDetails{
  return this.donutResult.find((c: { id: number; }) => c.id == id);
}


}
