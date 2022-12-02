import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
declare let gtag: Function;
// import LogRocket from 'logrocket';
// LogRocket.init('mbfzat/howtobecomeasupervillain');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.setUpAnalytics();
  }

  title = 'reader';

  //I really hate this function.
  setUpAnalytics() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'G-M68NXB68VV', {
          page_path: event.urlAfterRedirects,
        });
      });
  }
}
