import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log( validator.isEmail( 'test-a@gmail.com' ) );

const template = React.createElement( 'p', {}, 'test' );

ReactDOM.render( template, document.getElementById( 'app' ) );