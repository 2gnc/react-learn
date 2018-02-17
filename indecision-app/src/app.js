import subs, { square, add } from './utils.js'

console.log( 'app.js is runnig' );
console.log( square( 4 ) );
console.log( add( 100, 25 ) );

import { isAdult, canDrink } from './person.js';

console.log( canDrink(12), isAdult(18), canDrink(100) );
console.log( subs( 100, 20) );

import isSenior from './person.js';

console.log( isSenior(64) );