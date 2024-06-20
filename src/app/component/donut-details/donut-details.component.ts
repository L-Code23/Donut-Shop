import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';

import { ActivatedRoute } from '@angular/router';
import { DonutDetails } from '../../models/donut-details';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
  private _donutdetailsService: any;
  constructor(private activatedRoute: ActivatedRoute, private _donutsService:DonutsService){}
  donutResult:DonutDetails = {} as DonutDetails
 searchDetails: string = "";
  

  

 callApi():void{
  this._donutdetailsService.getDetails(this.searchDetails).subscribe((response:DonutDetails) => {
    console.log(response);
    this.donutResult = response;
  })
}
  ngOnInit() {
    this.callApi();
    this.activatedRoute.paramMap.subscribe((paramMap) =>{
      let id = Number(paramMap.get("id"));
      console.log(id);
      this.donutResult = this._donutdetailsService.getById(id);
      console.log(this.donutResult);
  
});

  
}
}