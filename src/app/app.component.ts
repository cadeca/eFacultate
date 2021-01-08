import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ThemingService} from './providers/theming.service';

@Component({
  selector: 'ef-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'efacultate';
  private DARK_THEME: string;

  constructor(private translate: TranslateService, private themeService: ThemingService) {
    const savedLanguage = localStorage.getItem('currentLanguage');
    if (savedLanguage) {
      translate.setDefaultLang(savedLanguage);
      translate.use(savedLanguage);
    } else {
      translate.setDefaultLang('ro');
      translate.use('ro');
      localStorage.setItem('currentLanguage', 'ro');
    }
  }

  ngOnInit(): void {
    this.themeService.setDefaultTheme();
  }
}
