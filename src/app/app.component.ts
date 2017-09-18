import { Component } from '@angular/core';
import { Heroe } from './heroe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
  heroes = HEROES;
  selectedHeroe: Heroe;

  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }
}

const HEROES: Heroe[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


