import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Injectable()
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  goToProfilePage(): void {
    window.open(this.keycloakService.getKeycloakInstance().createAccountUrl(), '_blank');
  }

  getUserRoles(): string[] {
    // return this.keycloakService.getUserRoles();
    return [];
  }

  getUserName(): string {
    // TODO see how to handle anonymous users
    // return this.keycloakService.getUsername();
    return undefined;
  }

  getUserIcon(): any {
    // return this.keycloakService.getUserIcon();
  }


}
