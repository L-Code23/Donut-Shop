import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { Donuts } from '../../models/donuts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor(private _donutsService:DonutsService){}
  donutResult:Donuts = {} as Donuts
  search:string ="";
  
  

  callApi():void{
    this._donutsService.getDonuts(this.search).subscribe((respone:Donuts) => {
      console.log(respone);
      this.donutResult = respone;
    })
  }

  ngOnInit(){
    this.callApi();
}
}
