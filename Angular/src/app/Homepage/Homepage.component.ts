import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images: any;

  constructor(private service:ImageService) {

    this.service.getimage().subscribe(data=>
      {
        this.images=data;
        console.log(data);
      })
  }
  
  ngOnInit() {
  }


}
