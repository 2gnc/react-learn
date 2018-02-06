class Header extends React.Componet {
	render() {
		return <p>This is from Header</p>;
	}
}

const jsx = (
	<div>
		<h1>Title</h1>
		<Header />
		<Header />
		<Header />
	</div>
);

ReactDOM.render( jsx, document.getElementById( 'app' ) );