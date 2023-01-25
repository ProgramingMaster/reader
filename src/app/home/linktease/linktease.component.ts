import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linktease',
  templateUrl: './linktease.component.html',
  styleUrls: ['./linktease.component.scss'],
})
export class LinkTeaseComponent implements OnInit {
  @Input() text = '';
  @Input() date = '';
  @Input() number = '';
  image: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.image = `assets/images/ep${this.number}/ep${this.number}thumbnail.png`;
  }

  // linkClicked() {
  //   this.router.navigate([`/episode${this.number}`]);
  // }
}
