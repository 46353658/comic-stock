import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  getIssuesFromUrl() {
    return this.http.get(`${environment.issuesUrl}${environment.limit500}`);
  }

  constructor(private http: HttpClient) { }
}
