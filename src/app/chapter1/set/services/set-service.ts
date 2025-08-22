import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { SetRequest } from '../models/set-request';
import { SetResponse } from '../models/set-response';
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({ providedIn: 'root' })
export class SetService {
  
    private apiUrl = environment.apiUrl;
    private http = inject(HttpClient);
    
    // Example method to demonstrate service functionality
    getSets(body: SetRequest): Observable<SetResponse> {
        // This would typically make an HTTP request to the backend API
        console.log('Fetching sets from:', this.apiUrl);
        return this.http.post<SetResponse>(this.apiUrl + '/sets/definitions', body, {responseType: 'json'}); // Placeholder for actual data fetching logic
    }
}