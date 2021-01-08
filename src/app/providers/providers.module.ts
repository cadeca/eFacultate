import {NgModule} from '@angular/core';
import {AuthGuard} from './AuthGuard.service';
import {AuthService} from './auth.service';
import {HttpService} from './Http.service';
import {ModulePermissionsService} from './module-permissions.service';
import {UserService} from './user.service';
import {ThemingService} from './theming.service';

@NgModule({
  imports: [
  ],
  providers: [
    HttpService,
    AuthGuard,
    AuthService,
    ModulePermissionsService,
    UserService,
    ThemingService
  ]
})
export class ProvidersModule {
}
