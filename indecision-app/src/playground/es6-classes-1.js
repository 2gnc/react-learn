class Person {
	constructor( name = 'Anonymous', age = 0 ) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi i'm ${ this.name }. `;
	}
	getDeacription() {
		return `${this.name} is ${this.age} year(s) old`;
	}
}
class Student extends Person {
	constructor( name, age, major ) {
		super( name, age ); 
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDeacription() {
		let description = super.getDeacription();
		if ( this.hasMajor() ) {
			description += `, their major is ${this.major}`;
		}
		return description;
	}
}
class Traveler extends Person {
	constructor( name, age, homeLocation ) {
		super( name, age );
		this.homeLocation = homeLocation;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		if( !!this.homeLocation ) {
			greeting += ` I am visiting from ${this.homeLocation}.`
		}
		return greeting;
	};
}
const me = new Traveler( 'Ksenia', 35, 'Secret');
console.log( me );
console.log( me.getGreeting() );

