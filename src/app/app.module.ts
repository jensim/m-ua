import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {LoginButtonComponent} from './components/loginbutton/login-button.component';
import {firebaseConfig} from '../environments/firebase.config';
import {LocalFireAuthService} from './service/localfireauth/local-fire-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth, LocalFireAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
