class VisibilityToggle extends React.Component {
	constructor( props ) {
		super( props );
		this.handleToggleVisibility = this.handleToggleVisibility.bind( this );
		this.state = {
			visible: false,
		}
	}

	handleToggleVisibility() {
		this.setState( ( prevState ) => {
			return {
				visible : !prevState.visible,
			};
		} );
	}

	render() {
		return (
			<div>
				<h1>Vizibility Toggler</h1>
				<button onClick = {this.handleToggleVisibility} > { this.state.visible ? 'Hide info' : 'show info' } </button>
				{
					this.state.visible && ( <p>Hidden info</p> )
				}
			</div>
			)
	}
}

ReactDOM.render( <VisibilityToggle />, document.getElementById( 'app' ) );