import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPageComponent} from './components/pages/dashboard-page/dashboard-page.component';
import {ApplicationSettingsPageComponent} from './components/pages/application-settings-page/application-settings-page.component';
import {ThemeTestPageComponent} from './components/pages/theme-test-page/theme-test-page.component';

const routes: Routes = [
  {
    path: 'home', component: DashboardPageComponent
    // canActivate: [AuthGuard]
  },
  {path: 'app-settings', component: ApplicationSettingsPageComponent },
  {path: 'theme', component: ThemeTestPageComponent },
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EfacultateRoutingModule {
}
