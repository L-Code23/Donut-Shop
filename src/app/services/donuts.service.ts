import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donuts } from '../models/donuts';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {
  getDetails(searchDetails: string) {
    throw new Error('Method not implemented.');
  }
  getById(id: number): import("../models/donut-details").DonutDetails {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  getDonuts(Donuts:string):Observable<Donuts>{
    return this.http.get<Donuts>(`https://grandcircusco.github.io/demo-apis/donuts.json`)
  }
}
