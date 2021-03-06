import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PrimitivesModule} from '../primitives/primitives.module';
import {RouterModule} from '@angular/router';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {TranslateModule} from '@ngx-translate/core';
import {ProvidersModule} from '../../providers/providers.module';
import {MaterialModule} from '../../material.module';
import {ThemeTestPageComponent} from './theme-test-page/theme-test-page.component';
import {OrganismsModule} from '../organisms/organisms.module';
import {DirectivesModule} from '../../directives/directives.module';
import {ApplicationSettingsPageComponent} from './application-settings-page/application-settings-page.component';

const components = [
  DashboardPageComponent,
  ThemeTestPageComponent,
  ApplicationSettingsPageComponent
];

@NgModule({
  declarations: components,
  imports: [
    ProvidersModule,
    OrganismsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PrimitivesModule,
    RouterModule,
    TranslateModule,
    MaterialModule,
    DirectivesModule
  ],
  exports: components,
})
export class PagesModule {
}
