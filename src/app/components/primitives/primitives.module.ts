import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../material.module';
import {ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageToggleComponent} from './language-toggle/language-toggle.component';
import {UserProfileMenuComponent} from './user-profile-menu/user-profile-menu.component';


const components = [
  ThemeSwitcherComponent,
  LanguageToggleComponent,
  UserProfileMenuComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule
  ],
  exports: components,
})
export class PrimitivesModule {
}
