import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroe';
import { HeroService } from './heroe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let heroe of heroes"
      [class.selected]="heroe === selectedHeroe"
      (click)="onSelect(heroe)">
      <span class="badge">{{heroe.id}}</span> {{heroe.name}}
    </li>
  </ul>
  <app-heroe-detail [heroe]="selectedHeroe"></app-heroe-detail>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Heroe[];
  selectedHeroe: Heroe;

  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

