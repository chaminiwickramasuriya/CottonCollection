import { Component, OnInit } from '@angular/core';
import {SheardService} from "./sheard/sheard.service";

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {


  constructor(private sheardService : SheardService) { }

  ngOnInit() { }

}
