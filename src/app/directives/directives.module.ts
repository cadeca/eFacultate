import {NgModule} from '@angular/core';
import {ProvidersModule} from '../providers/providers.module';

const directives = [
];
@NgModule({
  declarations: directives,
  imports: [
    ProvidersModule
  ],
  exports: directives,
})
export class DirectivesModule {
}
