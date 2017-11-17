import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class LocalFireAuthService {

  private provider = new firebase.auth.GoogleAuthProvider();

  constructor(public aFire: AngularFireAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.user = user;
        this.loginStateText = 'Log out';
        console.info('User logged in');
      } else {
        this.user = null;
        this.loginStateText = 'Login';
        console.warn('User NOT logged in');
      }
    });
  }

  isSignedIn() {
    return this.aFire.auth.currentUser === null;
  }

  signIn() {
    if (this.aFire.auth.currentUser === null) {
      console.info('Logging in.');
      this.aFire.auth.signInWithPopup(this.provider).then(function (result) {
        this.user = result.user;
        console.info('logged in user: ' + result.user);
      }).catch(function (err) {
        if (err) {
          console.error(err);
        }
      });
    } else {
      console.info('Already logged in.');
    }
  }

  signOut() {
    this.aFire.auth.signOut().then(function () {
      console.info('logged out');
    }).catch(function (err) {
      if (err) {
        console.error(err);
      }
    });
  }
}
