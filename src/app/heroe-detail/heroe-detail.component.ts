import { Component, OnInit } from '@angular/core';
import { Heroe } from './../heroe';
import { Input } from '@angular/core';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css'],
  template: `
  <div *ngIf="heroe"> <!-- Para evitar error de consola al cargar, ya que selected heroe es undefined-->
    <h2>{{heroe.name}} details!</h2>
    <div><label>id: </label>{{heroe.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="heroe.name" placeholder="name"/>
    </div>
  </div>
`
})
export class HeroeDetailComponent implements OnInit {
  @Input() heroe: Heroe;
  constructor() { }

  ngOnInit() {
  }

}
