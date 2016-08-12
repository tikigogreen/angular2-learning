// It is a "best practice" to apply the @Injectable() decorator ​from the start​ both for consistency and for future-proofing.
import { Injectable } from '@angular/core';

import {} from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes () {

    // A Promise is ... well it's a promise to call us back later when the results are ready.
    // We ask an asynchronous service to do some work and give it a callback function.
    // It does that work (somewhere) and eventually it calls our function with the results of the work or an error.

    return Promise.resolve(HEROES);
  }
}
