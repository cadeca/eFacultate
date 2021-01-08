import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {HeaderComponent} from './header/header.component';
import {PrimitivesModule} from '../primitives/primitives.module';
import {TranslateModule} from '@ngx-translate/core';
import {ProvidersModule} from '../../providers/providers.module';
import {DirectivesModule} from '../../directives/directives.module';
import {EfacultateRoutingModule} from '../../efacultate-routing.module';

const components = [
  HeaderComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimitivesModule,
    EfacultateRoutingModule,
    TranslateModule,
    ProvidersModule,
    DirectivesModule
  ],
  exports: components
})
export class OrganismsModule {
}
