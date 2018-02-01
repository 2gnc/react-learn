'use strict';

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		' Indecision App '
	),
	React.createElement(
		'p',
		null,
		'This is some info.'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'One'
		),
		React.createElement(
			'li',
			null,
			'Two'
		),
		React.createElement(
			'li',
			null,
			'Three'
		)
	)
); //JSX expression, скобки для группировки
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
