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
); 


let count = 0;
const templateTwo = (
	<div>
		<h1> Count: {count} </h1>
		<button id="button" className="button">+1</button>
	</div>
	);
console.log( templateTwo );

const appRoot = document.getElementById( 'app' );

ReactDOM.render( templateTwo, appRoot );