const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: [  ]
}

const onFormSubmit = (e) => {
	e.preventDefault(); 

	const option = e.target.elements.option.value;

	if ( option ) {
		app.options.push( option );
		e.target.elements.option.value = '';
		render();
	};

};

const removeAll = (e) => {
	if ( app.options.length > 0 ) {
		app.options = [];
		render();
	};
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	console.log( option );
};

const appRoot = document.getElementById( 'app' );

const render = () => {

	const template = (
		<div>
			<h1>{ app.title }</h1>
			{ app.subtitle && <p> { app.subtitle } </p> } {/* проверяем, есть ли подзаголовок, и если есть - выводим*/}
			<p>{ app.options.length > 0 ? 'Here are your options:' : 'Here are no options' }</p>
			<button disabled={ app.options.length === 0 } onClick ={onMakeDecision} >What should I do?</button>
			<button onClick = {removeAll} >Remove all</button>
			<ol>
				{
					app.options.map( ( option, i ) => <li key = {i}> {option} </li> ) //сокращенная запись стрелочной функции
				}
			</ol>
			<form onSubmit={ onFormSubmit } >
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
);
	ReactDOM.render( template, appRoot );
};

render();