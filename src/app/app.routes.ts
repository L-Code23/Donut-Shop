import { Routes } from '@angular/router';
import { DonutsComponent } from './component/donuts/donuts.component';
import { DonutDetailsComponent } from './component/donut-details/donut-details.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
      //Home Page
      { path:"", component: DonutsComponent},

      
     //Details
     {path: ":id", component: DonutDetailsComponent},
 
    
 
     //NotFound
     { path: "**", component:NotFoundComponent}
];
