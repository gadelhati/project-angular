import { Component } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  response1: any[] = ['456']

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getData('https://conmebol-api.vercel.app/api/results').subscribe((data) => {
      console.log(data);
    });
  }
  printer() {
    console.log('321')
  }
}
