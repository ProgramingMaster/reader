import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() text = '';
  @Input() date = '';
  @Input() number = '';
  image: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.image = `assets/images/ep${this.number}thumbnail.png`;
  }

  linkClicked() {
    this.router.navigate([`/episode${this.number}`]);
  }
}
