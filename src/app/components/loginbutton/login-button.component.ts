import {AfterViewInit, ApplicationRef, Component} from '@angular/core';
import {LocalFireAuthService} from '../../service/localfireauth/local-fire-auth.service';
import {User} from 'firebase';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements AfterViewInit {
  private loginState = {text: 'Log in'};

  constructor(public myAuth: LocalFireAuthService, public appRef: ApplicationRef) {
  }

  ngAfterViewInit(): void {
    this.registerAuthStatus();
  }

  registerAuthStatus() {
    const state = this.loginState;
    const appRef = this.appRef;
    this.myAuth.onAuthStateChanged(function (user: User) {
      if (user) {
        state.text = 'Log out ' + user.displayName;
        console.info('LoginButtonComponent::user logged in::' + user.displayName);
      } else {
        state.text = 'Log in';
        console.info('LoginButtonComponent::user logged out');
      }
      appRef.tick();
    });
  }

  pressLogin(event: Event) {
    console.debug('Button kicked.');
    if (this.myAuth.isSignedIn()) {
      this.myAuth.signOut(function (err) {
        console.info('log out callback');
      });
    } else {
      this.myAuth.signIn(function (err) {
        console.info('logged in callback');
        if (err) {
          console.error(err);
        }
      });
    }
  }
}
