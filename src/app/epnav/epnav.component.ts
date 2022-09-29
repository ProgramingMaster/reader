import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-epnav',
  templateUrl: './epnav.component.html',
  styleUrls: ['./epnav.component.scss'],
})
export class EpnavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollTop = 0;
  hideNav = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.hideNav = this.scrollTop < event.target.scrollTop;
    this.scrollTop = event.target.scrollTop;
  }
}
