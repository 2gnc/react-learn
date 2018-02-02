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
);

var count = 0;
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		' Count: ',
		count,
		' '
	),
	React.createElement(
		'button',
		{ id: 'button', className: 'button' },
		'+1'
	)
);
console.log(templateTwo);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
