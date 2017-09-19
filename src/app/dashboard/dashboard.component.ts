import { Component, OnInit } from '@angular/core';
import { Heroe } from './../heroe';
import { HeroService } from './../heroe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
