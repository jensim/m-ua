import {Component} from '@angular/core';
import {LocalFireAuthService} from '../../service/localfireauth/local-fire-auth.service';
import {User} from 'firebase';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  private loginState = {text: 'Log in'};

  constructor(public myAuth: LocalFireAuthService) {
    this.registerAuthStatus();
  }

  private registerAuthStatus() {
    const state = this.loginState;
    LocalFireAuthService.onAuthStateChanged(function (user: User) {
      if (user) {
        state.text = 'Log out ' + user.displayName;
        console.debug('LoginButtonComponent::user logged in::' + user.displayName);
      } else {
        state.text = 'Log in';
        console.debug('LoginButtonComponent::user logged out');
      }
    });
  }

  private pressLogin($event: Event) {
    console.trace('Button kicked.');
    if (this.myAuth.isSignedIn()) {
      this.myAuth.signOut(function () {
      });
    } else {
      this.myAuth.signIn(function () {
      });
    }
  }
}
