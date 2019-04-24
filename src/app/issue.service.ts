import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issuesUrl = 'http://localhost:3030/issues/'
  
  getIssuesFromUrl() {
    return this.http.get(`${this.issuesUrl}?%24limit=500`);
  }

  constructor(private http: HttpClient) { }
}
