import { Component } from '@angular/core';
import { ApiService } from '../api';

interface Classification {
  country: string,
  position: number,
  label: string,
  matches_played: number,
  won: number,
  tied: number,
  losses: number,
  goal_difference: number,
  points: number,
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  classification: Classification[]
  constructor(private apiService: ApiService) {
    this.classification = []
  }
  ngOnInit(): void {
    this.apiService.getData('https://conmebol-api.vercel.app/api/classification').subscribe((response: any) => {
      this.classification = response.results
    });
  }
}
