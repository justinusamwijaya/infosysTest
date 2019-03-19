import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAWTreTl-sKV05Qi-8nnTe6rp6xQCSmiGI',
  authDomain: 'sinarmas-frontend-justin.firebaseapp.com',
  databaseURL: 'https://sinarmas-frontend-justin.firebaseio.com',
  projectId: 'sinarmas-frontend-justin',
  storageBucket: 'sinarmas-frontend-justin.appspot.com',
  messagingSenderId: '783147727393'
}
let app = firebase.initializeApp(config)
let db = app.database()
let directory = function (x) {
  if (x === undefined) x = ''
  return db.ref('/' + x)
}

export const firebaseapp = app
export const database = directory
