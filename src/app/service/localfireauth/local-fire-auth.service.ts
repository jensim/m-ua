import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class LocalFireAuthService {

  private provider = new firebase.auth.GoogleAuthProvider();

  constructor(public aFire: AngularFireAuth) {
  }

  onAuthStateChanged(callback) {
    firebase.auth().onAuthStateChanged(callback);
  }

  isSignedIn() {
    return this.aFire.auth.currentUser !== null;
  }

  signIn(callback: Function) {
    if (this.aFire.auth.currentUser === null) {
      console.info('Logging in.');
      this.aFire.auth.signInWithPopup(this.provider).then(function (result) {
        console.info('logged in user: ' + result.user.displayName);
        callback(null, result.user);
      }).catch(function (err) {
        if (err) {
          console.error(err);
          callback(err);
        }
      });
    } else {
      console.info('Already logged in.');
    }
  }

  signOut(callback: Function) {
    this.aFire.auth.signOut().then(function () {
      console.info('logged out');
      callback();
    }).catch(function (err) {
      if (err) {
        console.error(err);
        callback(err);
      }
    });
  }
}
