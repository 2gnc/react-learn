const appRoot = document.getElementById( 'app' );

let visibility = false;
let info = '';

const vizToggle = () => {
	visibility = !visibility;
	render();
};

const render = () => {
const template = (
	<div>
		<h1>Visibility toggler</h1>
		<button onClick = {vizToggle} >{ visibility? 'Hide info' : 'Show info' }</button>
		{ visibility && (
			<p> There are some info. </p>
			)}
	</div>
	);
	ReactDOM.render( template, appRoot );
};

render();