import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Global, ThemeProvider } from '@emotion/react';
import defaultTheme from './themes/default';
import { globalStyles } from './globalStyles';

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
		<ThemeProvider theme={defaultTheme}>
			<Global styles={globalStyles} />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
