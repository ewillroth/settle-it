import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API,
	authDomain: 'settle-io.firebaseapp.com',
	databaseURL: 'https://settle-io.firebaseio.com',
	projectId: 'settle-io',
	storageBucket: 'gs://settle-io.appspot.com/',
	messagingSenderId: '985342258862',
};

firebase.initializeApp(config);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
