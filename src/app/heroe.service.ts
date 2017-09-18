import { Injectable } from '@angular/core';
import { HEROES } from './fake-heroes';
import { Heroe } from './heroe';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Heroe[]> {
    return Promise.resolve(HEROES);
  }
}
