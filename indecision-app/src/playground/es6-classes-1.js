class Person {
	constructor( name = 'Anonymous', age = 0 ) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi ${ this.name } `;
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

const me = new Student( 'Ksenia', 35 );
const other = new Student();
const va = new Student( 'Vasya', 25, 'Programmer' );

console.log( me.getDeacription() );
console.log( va.getDeacription() );
