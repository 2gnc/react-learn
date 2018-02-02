'use strict';

var app = {
	title: 'Indecision App',
	subtitle: 'This is some info.',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		' ',
		app.subtitle,
		' '
	),
	' ',
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options:' : 'No options'
	)
); //JSX expression, скобки для группировки

var user = {
	name: 'Дарт Вейдер',
	age: 34,
	location: 'Moscow'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

//arrow fucntion declaration
var getFirstName = function getFirstName(name) {
	return name.split(' ')[0];
};
// arrow function expression
var getFirstNameE = function getFirstNameE(name) {
	return name.split(' ')[0];
};

console.log(getFirstNameE(user.name));

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
