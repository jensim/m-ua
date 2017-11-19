import {Component} from '@angular/core';
import {LocalFireAuthService} from '../../service/localfireauth/local-fire-auth.service';
import {User} from 'firebase';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  loginState = {text: 'Log in'};

  constructor(public myAuth: LocalFireAuthService) {
    this.registerAuthStatus();
  }

  private registerAuthStatus() {
    const state = this.loginState;
    this.myAuth.onAuthStateChanged(function (user: User) {
      if (user) {
        state.text = 'Log out ' + user.displayName;
        console.info('LoginButtonComponent::user logged in::' + user.displayName);
      } else {
        state.text = 'Log in';
        console.info('LoginButtonComponent::user logged out');
      }
    });
  }

  pressLogin($event: Event) {
    const state = this.loginState;
    console.debug('Button kicked.');
    if (this.myAuth.isSignedIn()) {
      this.myAuth.signOut(function (err) {
        state.text = 'Log in';
        console.info('log out callback');
      });
    } else {
      this.myAuth.signIn(function (err, user: User) {
        console.info('logged in callback');
        if (err) {
          console.error(err);
        }
        if (user) {
          state.text = 'Log out ' + user.displayName;
        } else {
          state.text = 'Log in';
        }
      });
    }
  }
}
