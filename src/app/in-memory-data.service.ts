import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Array<Hero> = [
      { id: 11, name: 'Mr. Nice', exp: 0 },
      { id: 12, name: 'Narco', exp: 0 },
      { id: 13, name: 'Bombasto', exp: 0 },
      { id: 14, name: 'Celeritas', exp: 0 },
      { id: 15, name: 'Magneta', exp: 0 },
      { id: 16, name: 'RubberMan', exp: 0 },
      { id: 17, name: 'Dynama', exp: 0 },
      { id: 18, name: 'Dr IQ', exp: 0 },
      { id: 19, name: 'Magma', exp: 0 },
      { id: 20, name: 'Tornado', exp: 0 }
    ].map(item => {
      return new Hero(item);
    });
    return { heroes };
  }
}
