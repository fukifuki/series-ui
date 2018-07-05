import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	selectionCriterias = ['recommended', 'newest', 'most popular'];

  constructor() { }

  ngOnInit() {
  }

}
