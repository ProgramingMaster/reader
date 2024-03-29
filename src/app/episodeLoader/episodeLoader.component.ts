import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-episode-loader',
  templateUrl: './episodeLoader.component.html',
  styleUrls: ['./episodeLoader.component.scss'],
})
export class EpisodeLoaderComponent implements OnInit {
  number: any;
  commentsList: any;

  // How many panels each episode has
  panelNumbers = [76, 64, 50, 76, 65, 55, 46, 58, 57, 84, 57, 46, 40];

  episodeLinks: any = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    // Episode number from url
    this.number = this.route.snapshot.params['number'];

    // Populates the episodeLinks array with the correct image links.
    for (let i = 1; i <= this.panelNumbers[this.number - 1]; i++) {
      this.episodeLinks.push(
        `../../assets/images/ep${this.number}/ep${this.number}slide${i}.png`
      );
    }

    // Get episode commments from app service
    this.getComments();
  }

  getComments() {
    this.appService.getComments(this.number).subscribe((x) => {
      this.commentsList = x.reverse();
    });
  }

  sendComment(form: any) {
    this.appService.sendComment(form, this.number);
    this.getComments();
  }

  //I really hate this function.
  // setUpAnalytics() {
  //   this.router.events
  //     .pipe(
  //       filter(
  //         (event): event is NavigationEnd => event instanceof NavigationEnd
  //       )
  //     )
  //     .subscribe((event: NavigationEnd) => {
  //       gtag('config', 'G-M68NXB68VV', {
  //         page_path: event.urlAfterRedirects,
  //       });
  //     });
  // }
}
