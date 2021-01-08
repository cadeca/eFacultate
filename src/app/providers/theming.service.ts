import {Injectable} from '@angular/core';
const DARK_THEME = 'dark-theme';
const LIGHT_THEME = 'light-theme';
const ORANGE_COLOR = 'orange-';

@Injectable()
export class ThemingService {
  get themeLight(): string {
    return this._themeLight;
  }

  get themeColor(): string {
    return this._themeColor;
  }

  get darkThemeModeOn(): boolean {
    return this._darkThemeModeOn;
  }

  private _themeLight = LIGHT_THEME;
  private _themeColor = ORANGE_COLOR;
  private _darkThemeModeOn = false;


  setDefaultTheme(): void {
    let themeColor;
    let themeLight;
    // if theme is stored in storage - use it
    if (localStorage.getItem('pxThemeLight') && localStorage.getItem('pxThemeColor')){
      // set theme color to one from storage
      themeColor = localStorage.getItem('pxThemeColor');
      themeLight = localStorage.getItem('pxThemeLight');
      // add that class to body
      const body = document.getElementsByTagName('body')[0];
      body.classList.add(themeColor + themeLight);
      const darkThemeModeOn = themeLight === DARK_THEME;
    } else {
      this.changeTheme(themeColor, themeLight);
    }
  }

  changeTheme(themeColorToSet, themeLightToSet): any {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this._themeColor + this._themeLight);

    // switch theme
    if (this._themeColor !== themeColorToSet && themeColorToSet) {
      this._themeColor = themeColorToSet;
    }
    if (this._themeLight !== themeLightToSet && themeLightToSet) {
      this._themeLight = themeLightToSet;
    }
    body.classList.add(this._themeColor + this._themeLight);

    // save it to local storage
    this._darkThemeModeOn = this._themeLight === DARK_THEME;

    localStorage.setItem('pxThemeColor', this._themeColor);
    localStorage.setItem('pxThemeLight', this._themeLight);
  }
}
