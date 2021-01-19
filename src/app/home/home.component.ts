import { environment } from './../../environments/environment';
import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  spaceList: any[];
  developerName: string;
  constructor(private commonService: CommonService) {
    this.commonService.spaceData.subscribe((data) => {
      this.spaceList = data;
    });
  }

  ngOnInit(): void {
    this.developerName = environment.DEVELOPER_NAME;
    this.commonService.getData('launches?limit=100');
  }
}
