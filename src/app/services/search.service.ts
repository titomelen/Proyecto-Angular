import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ITunesSearchResults } from '../interfaces/itunes-search-result.interface';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public total = 0;
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    public getITunesResults(term: string): Observable<ITunesSearchResults> {
        term = term.trim();
        return this.http.jsonp<ITunesSearchResults>(
            this.apiUrl + term,
            'callback'
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`
            );
        }

        return throwError('Something went in sending the request. Please try again.');
    }
}
