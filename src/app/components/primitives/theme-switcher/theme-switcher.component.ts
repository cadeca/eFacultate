import { Component } from '@angular/core';
import {ThemingService} from '../../../providers/theming.service';

const DARK_THEME = 'dark-theme';
const LIGHT_THEME = 'light-theme';

@Component({
  selector: 'ef-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {

  themeLight;
  themeColor;
  darkThemeModeOn = false;
  constructor(private themeService: ThemingService) {
    this.themeLight = this.themeService.themeLight;
    this.themeColor = this.themeService.themeColor;
  }

  changeTheme(themeColorToSet, themeLightToSet): void {
    this.themeService.changeTheme(themeColorToSet, themeLightToSet);
    this.themeLight = this.themeService.themeLight;
    this.themeColor = this.themeService.themeColor;
    this.darkThemeModeOn = this.themeService.darkThemeModeOn;
  }

  changeThemeLight(event): void {
    if (event.checked) {
      this.changeTheme(null, DARK_THEME);
    } else {
      this.changeTheme(null, LIGHT_THEME);
    }
  }

  changeThemeColor(color: string): void {
    this.changeTheme(color, null);
  }
}
