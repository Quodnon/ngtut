import { Injectable } from '@angular/core';
import Hero from './hero';
import {heroes} from './heroes-list';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(heroes);
    // here should be fetch to firebase for list of heroes;
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(heroes.find(hero => hero.id === id));
  }
  constructor(private messageService: MessageService) { }

}
