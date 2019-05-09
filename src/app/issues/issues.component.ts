import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues: Issue[];

  getIssuesFromUrl(): void {
    this.issueService.getIssuesFromUrl()
      .subscribe({
        next: (issues: any) => {
          this.issues = issues.data;
        }
      });
  }

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssuesFromUrl();
    console.log(`issues: ${this.issues}`);
  }

}
