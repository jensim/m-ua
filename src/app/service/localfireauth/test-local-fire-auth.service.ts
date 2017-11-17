export class TestLocalFireAuthService {
  public signInStatus = false;

  constructor() {
  }

  signIn() {
    console.info('fake sign in');
  }

  signOut() {
    console.info('fake sign out');
  }

  isSignedIn() {
    console.info('fake isSignedIn');
    return this.signInStatus;
  }
}
