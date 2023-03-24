import { Component, HostListener, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-epnav',
  templateUrl: './epnav.component.html',
  styleUrls: ['./epnav.component.scss'],
})
export class EpnavComponent implements OnInit {
  // Remember: Change this every time you add an episode
  total = 13;
  likes = 0;

  @Input() number: any;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    this.getLikes();
  }

  scrollTop = 0;
  hideNav = false;
  liked = false;
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   const el = event.target.documentElement;

  //   this.hideNav = this.scrollTop < el.scrollTop;
  //   this.scrollTop = el.scrollTop;
  // }

  like() {
    this.appService.like(this.number);
  }

  nextEpisode() {
    // this.router.navigate(['/episode/' + (this.number + 1)]);
    window.location.href = `/episode/${Number(this.number) + 1}`;
    this.getLikes();
  }

  previousEpisode() {
    // console.log(this.number);

    // this.router.navigate(['/episode/' + (this.number - 1)]);
    window.location.href = `/episode/${this.number - 1}`;
    this.getLikes();
  }

  back() {
    this.router.navigate(['']);
  }

  getLikes() {
    if (localStorage.getItem(`episode/${this.number}/like`) == 'true') {
      this.liked = true;
    } else {
      this.liked = false;
    }
    this.appService.getLikes(this.number).subscribe((x) => {
      //@ts-ignore
      // console.log('x = ', x);
      if (x != null) {
        //@ts-ignore
        this.likes = x.likes;
        // console.log('getLikes(epnav) ', this.likes);
      } else {
        this.likes = 0;
      }
    });
  }

  addLike() {
    // console.log('add');

    if (localStorage.getItem(`episode/${this.number}/like`) != 'true') {
      localStorage.setItem(`episode/${this.number}/like`, 'true');
      this.appService.addLike(this.number);
    }
    this.getLikes();
  }
}
