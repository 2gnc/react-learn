const app = {
	title: 'Indecision App',
	subtitle: 'This is some info.',
	options: [ 'One', 'Two' ]
}

const template = (
	<div>
		<h1>{ app.title }</h1>
		{ app.subtitle && <p> { app.subtitle } </p> } {/* проверяем, есть ли подзаголовок, и если есть - выводим*/}
		<p>{ app.options.length > 0 ? 'Here are your options:' : 'No options' }</p>

	</div>
); //JSX expression, скобки для группировки

const user = {
	name: 'Дарт Вейдер',
	age: 34,
	location:'Moscow',
}


const templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
	);

//arrow fucntion declaration
const getFirstName = ( name ) => {
	return name.split( ' ' )[0];
}
// arrow function expression
const getFirstNameE = ( name ) => name.split( ' ' )[0];

console.log( getFirstNameE( user.name ) );



const appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );