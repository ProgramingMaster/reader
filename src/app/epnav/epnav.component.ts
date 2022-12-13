import { Component, HostListener, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-epnav',
  templateUrl: './epnav.component.html',
  styleUrls: ['./epnav.component.scss'],
})
export class EpnavComponent implements OnInit {
  total = 6;

  @Input() number: any;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {}

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
    this.router.navigate(['/episode' + (this.number + 1)]);
  }

  previousEpisode() {
    this.router.navigate(['/episode' + (this.number - 1)]);
  }

  back() {
    this.router.navigate(['']);
  }
}
