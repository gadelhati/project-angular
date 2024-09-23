import { Component } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  results: any[]
  constructor(private apiService: ApiService) {
    this.results = []
  }
  ngOnInit(): void {
    this.apiService.getData('https://conmebol-api.vercel.app/api/results').subscribe((response: any) => {
      this.results = response
    });
  }
}
