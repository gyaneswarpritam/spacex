import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  spaceData: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) {}

  getData(url) {
    const apiUrl = environment.API_URL + url;
    return this.http.get(apiUrl).subscribe((data) => {
      this.setSpaceData(data);
    });
  }
  getData1(url, params) {
    const apiUrl = environment.API_URL + url;
    return this.http.get(apiUrl, { params: params }).subscribe((data) => {
      this.setSpaceData(data);
    });
  }

  setSpaceData(data) {
    this.spaceData.next(data);
  }

  getSpaceData() {
    return this.spaceData.asObservable();
  }
}
