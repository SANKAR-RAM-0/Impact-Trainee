import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Store_CMS';

  images: any;

  constructor(private service:ImageService) {

    this.service.getimage().subscribe(data=>
      {
        this.images=data;
        console.log(data);
      })
  }


}
