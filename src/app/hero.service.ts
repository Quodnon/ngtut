import { Injectable } from '@angular/core';
import Hero from './hero';
import {heroes} from './heroes-list';


@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return heroes;
    // here should be fetch to firebase for list of heroes;
  }
  constructor() { }

}
