import { Component, OnInit, OnChanges,Input } from '@angular/core';
import {SheardService} from "../image-details/sheard/sheard.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements  OnChanges{

  @Input() filterBy?: string= 'all'
  visibleImages: any[]= [];

  constructor(private sheardService: SheardService) {
    this.visibleImages =this.sheardService.getImages();

  }

  ngOnChanges(){
    this.visibleImages =this.sheardService.getImages();
  }
}
