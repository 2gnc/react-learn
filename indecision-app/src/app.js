var template = (
	<div>
		<h1> Indecision App </h1>
		<p>This is some info.</p>
		<ol>
			<li>One</li>
			<li>Two</li>
			<li>Three</li>
		</ol>
	</div>
); //JSX expression, скобки для группировки
var appRoot = document.getElementById( 'app' );

ReactDOM.render( template, appRoot );