import { Component, OnInit } from '@angular/core';
// import { Heroes } from './heroes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  ngOnInit(): void {
  }
}

