import { Component, OnInit } from '@angular/core';
import { Heroe } from './../heroe';
import { HeroService } from './../heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  selectedHeroe: Heroe;

  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }
  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHeroe.id]);
  }
}
