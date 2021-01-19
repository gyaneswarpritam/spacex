import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  years = [
    { year: 2006, active: false },
    { year: 2007, active: false },
    { year: 2008, active: false },
    { year: 2009, active: false },
    { year: 2010, active: false },
    { year: 2011, active: false },
    { year: 2012, active: false },
    { year: 2013, active: false },
    { year: 2014, active: false },
    { year: 2015, active: false },
    { year: 2016, active: false },
    { year: 2017, active: false },
    { year: 2018, active: false },
    { year: 2019, active: false },
    { year: 2020, active: false },
  ];

  launchValues = [
    { value: 'true', active: false },
    { value: 'false', active: false },
  ];

  landingValues = [
    { value: 'true', active: false },
    { value: 'false', active: false },
  ];

  checkMatch: any;
  checkMatchLaunch: any;
  checkMatchLanding: any;
  searchValue = {};

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  searchFilter(search) {
    console.log(search.yearSearch, 'se');
    if (search.yearSearch) {
      this.years.map((res) => {
        res.active = false;
      });
      if (this.checkMatch == search.yearSearch.year) {
        search.yearSearch.active = false;
        delete this.searchValue['launch_year'];
        this.checkMatch = '';
      } else {
        search.yearSearch.active = true;
        this.searchValue['launch_year'] = search.yearSearch.year;
        this.checkMatch = search.yearSearch.year;
      }
    }
    if (search.launchSearch) {
      this.launchValues.map((res) => {
        res.active = false;
      });
      if (this.checkMatchLaunch == search.launchSearch.value) {
        search.launchSearch.active = false;
        delete this.searchValue['launch_success'];
        this.checkMatchLaunch = '';
      } else {
        search.launchSearch.active = true;
        this.searchValue['launch_success'] = search.launchSearch.value;
        this.checkMatchLaunch = search.launchSearch.value;
      }
    }
    if (search.landingSearch) {
      this.landingValues.map((res) => {
        res.active = false;
      });
      if (this.checkMatchLanding == search.landingSearch.value) {
        search.landingSearch.active = false;
        delete this.searchValue['land_success'];
        this.checkMatchLanding = '';
      } else {
        search.landingSearch.active = true;
        this.searchValue['land_success'] = search.landingSearch.value;
        this.checkMatchLanding = search.landingSearch.value;
      }
    }

    this.commonService.getData1('launches', this.searchValue);
  }
}
