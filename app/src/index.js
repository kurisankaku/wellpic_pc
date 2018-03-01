import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);

