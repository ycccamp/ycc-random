import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD-B_AN7Ev0cbCtJTGrteL3FgGs7pkRljg',
  authDomain: 'itcamp15-registration.firebaseapp.com',
  databaseURL: 'https://itcamp15-registration.firebaseio.com',
  projectId: 'itcamp15-registration',
  storageBucket: 'itcamp15-registration.appspot.com',
  messagingSenderId: '576206709323'
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
