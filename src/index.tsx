import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD69fVmX1N539fYPjj4X2mu7hDR4LYAnL8',
  authDomain: 'ycccamp.firebaseapp.com',
  databaseURL: 'https://ycccamp.firebaseio.com',
  projectId: 'ycccamp',
  storageBucket: 'ycccamp.appspot.com',
  messagingSenderId: '191460697180'
}

firebase.initializeApp(config)

export const storage = firebase.storage()

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
