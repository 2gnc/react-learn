import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log( validator.isEmail( 'test-a@gmail.com' ) );

const template = <p>tesst!</p>;

ReactDOM.render( template, document.getElementById( 'app' ) );gst