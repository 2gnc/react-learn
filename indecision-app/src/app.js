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
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		console.log( this )
		return (
			<div>
				Option: { this.props.option }
			</div>
			)
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				{ 
					this.props.options.map( (opt, i) => <Option key={i} option = {opt} /> )
				}
		</div>
		);
	}
}

class AddOption extends React.Component {
	render() {
		return (
			<div>
				AddOption component here
			</div>
		);
	}
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );
