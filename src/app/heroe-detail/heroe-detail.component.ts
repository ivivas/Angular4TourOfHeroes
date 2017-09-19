import { Component, OnInit } from '@angular/core';
import { Heroe } from './../heroe';
import { Input } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './../heroe.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {
  @Input() heroe: Heroe;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(heroe => this.heroe = heroe);
  }

  goBack(): void {
    this.location.back();
  }

}
