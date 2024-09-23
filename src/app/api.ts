import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = 'https://conmebol-api.vercel.app/api/';

    constructor(private http: HttpClient) { }

    authenticate(username: string, password: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const body = `username=${username}&password=${password}`;
        return this.http.post(`${this.apiUrl}/auth`, body, { headers });
    }

    getData(apiUrl: string) {
        return this.http.get(apiUrl);
    }
    postData(apiUrl: string, data: any) {
        return this.http.post(apiUrl, data);
    }
    updateData(apiUrl: string, id: number, data: any) {
        return this.http.put(`${apiUrl}/${id}`, data);
    }
    deleteData(apiUrl: string, id: number) {
        return this.http.delete(`${apiUrl}/${id}`);
    }
}