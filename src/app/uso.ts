import { Component, OnInit } from '@angular/core';
import { ApiService } from './api';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getData('https://conmebol-api.vercel.app/api/results').subscribe((data) => {
            console.log(data);
        });
    }
}