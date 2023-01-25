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
  total = 9;
  likes = 0;

  @Input() number: any;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    //this.getLikes();
  }

  scrollTop = 0;
  hideNav = false;
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   const el = event.target.documentElement;

  //   this.hideNav = this.scrollTop < el.scrollTop;
  //   this.scrollTop = el.scrollTop;
  // }

  // like() {
  //   this.appService.like(this.number);
  // }

  nextEpisode() {
    // this.router.navigate(['/episode/' + (this.number + 1)]);
    window.location.href = `/episode/${Number(this.number) + 1}`;
  }

  previousEpisode() {
    console.log(this.number);

    // this.router.navigate(['/episode/' + (this.number - 1)]);
    window.location.href = `/episode/${this.number - 1}`;
  }

  back() {
    this.router.navigate(['']);
  }

  getLikes() {
    this.appService.getLikes(this.number).subscribe((x) => {
      console.log(x);
      if (x != undefined) {
        //@ts-ignore
        this.likes = x.likes;
      }
    });
  }

  addLike() {
    this.appService.addLike(this.number);
  }
}
