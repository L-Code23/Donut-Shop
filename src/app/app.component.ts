import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DonutsComponent } from "./component/donuts/donuts.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, DonutsComponent]
})
export class AppComponent {
  title = 'DonutShopAngular';
}
