'use strict';

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	};
};

var removeAll = function removeAll(e) {
	if (app.options.length > 0) {
		app.options = [];
		render();
	};
};

var onMakeDecision = function onMakeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNum];
	console.log(option);
};

var appRoot = document.getElementById('app');

var render = function render() {

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
			app.options.length > 0 ? 'Here are your options:' : 'Here are no options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What should I do?'
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'Remove all'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option, i) {
				return React.createElement(
					'li',
					{ key: i },
					' ',
					option,
					' '
				);
			}) //сокращенная запись стрелочной функции

		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

render();
