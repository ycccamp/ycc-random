import firebase from 'firebase'

export function signIn() {
  firebase
    .auth()
    .signInWithRedirect(new firebase.auth.FacebookAuthProvider())
    .catch(e => window.alert(`Sorry, cannot sign in! ${e}`))
}

export function signOut() {
  if (window.confirm('RLY SIGN OUT?')) firebase.auth().signOut()
}
