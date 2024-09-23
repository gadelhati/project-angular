import { Component } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  matches: any[]
  constructor(private apiService: ApiService) {
    this.matches = []
  }
  ngOnInit(): void {
    this.apiService.getData('https://conmebol-api.vercel.app/api/matches').subscribe((response: any) => {
      this.matches = response
    });
  }
}
