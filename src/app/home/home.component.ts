import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  spaceList: any[];
  constructor(private commonService: CommonService) {
    this.commonService.spaceData.subscribe((data) => {
      this.spaceList = data;
    });
  }

  ngOnInit(): void {
    this.commonService.getData('launches?limit=100');
  }
}
