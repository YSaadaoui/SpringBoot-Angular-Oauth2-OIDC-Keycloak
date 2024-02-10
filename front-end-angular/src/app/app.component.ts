import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end-angular';
  public profile: any;
  constructor(public keycloakService: KeycloakService) {
  }
  ngOnInit() {
    if(this.keycloakService.isLoggedIn()){
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }
  }

  Logout() {
    this.keycloakService.logout(window.location.origin);
  }

  async Onlogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }
}
