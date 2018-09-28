import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatSort, MatTableDataSource} from '@angular/material';

import { IssuesService } from '../../issues.service'
import { IssueInterface } from '../../interfaces/Issue'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading : boolean = true;
  issues: IssueInterface[];

  @ViewChild(MatSort) sort: MatSort;


  constructor(private IssuesService: IssuesService, private router: Router) { }

  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];


  ngOnInit() {
    this.getIssue();

    this.loading  = true;
    // this.dataSource = new MatTableDataSource(data);
    // this.dataSource.sort = this.sort;
  }

  getIssue(){
    this.IssuesService.getIssues().subscribe((issues: IssueInterface[])=> {
      this.loading = false;
      this.issues = issues;
      // this.issues = new MatTableDataSource(issues);

      // this.issues.sort = this.sort;
      // this.issues.sort = this.sort;

      // this.issues = new MatTableDataSource(issues);
      // this.dataSource = new MatTableDataSource(data);

      console.log('get issues d........', issues)
    })
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.IssuesService.deleteIssue(id).subscribe(() => {
      this.getIssue();
    });
  }

}
