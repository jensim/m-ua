import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {

  private provider = new firebase.auth.GoogleAuthProvider();
  private user = null;
  loginStateText = 'Login';

  constructor(public af: AngularFireAuth) {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        this.user = user;
        this.loginStateText = 'Log out';
        console.info('User logged in');
      } else {
        this.user = null;
        this.loginStateText = 'Login';
        console.warn('User NOT loggeed in');
      }
    });

  }

  pressLogin($event: Event) {
    console.info('Button kicked.');
    if (this.user === null) {
      this.af.auth.signInWithPopup(this.provider).then(function (result) {
        this.user = result.user;
        console.info('logged in user: ' + result.user);
      }).catch(function (err) {
        if (err) {
          console.error(err);
        }
      });
    } else {
      this.af.auth.signOut().then(function () {
        console.info('logged out');
      }).catch(function (err) {
        if (err) {
          console.error(err);
        }
      });
    }
  }
}
