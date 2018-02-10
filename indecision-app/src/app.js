class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision App';
		const subtitle = 'Put your life in the hands of a computer';
		const options = [ 'one option', 'two option', 'three option', 'four option' ];

		return (
			<div>
				<Header title = {title} subtitle = {subtitle} />
				<Action />
				<Options options = {options} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {

	handlePick() {
		console.log( 'handlePick' );
	}

	render() {
		return (
			<div>
				<button onClick = { this.handlePick } >What should I do?</button>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				Option: { this.props.option }
			</div>
			)
	}
}

class Options extends React.Component {
	constructor( props ) {
		super( props );
		this.handleRemoveAll = this.handleRemoveAll.bind( this );
	}
	handleRemoveAll() {
		console.log( this.props.options );
	}

	render() {
		return (
			<div>
				<button onClick = { this.handleRemoveAll }> Remove all </button>
				{ 
					this.props.options.map( (opt, i) => <Option key={i} option = {opt} /> )
				}
		</div>
		);
	}
}

class AddOption extends React.Component {

	onFormSubmit( e ) {

		e.preventDefault();

		const option = e.target.elements.option.value.trim();

		if ( option ) {
			console.log( option );
			e.target.elements.option.value = '';
		}
		
	}

	render() {
		return (
			<div>
				<form onSubmit = { this.onFormSubmit } >
					<input type = "text" name = "option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );
