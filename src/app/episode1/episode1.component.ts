import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode1.component.html',
  styleUrls: ['./episode1.component.scss'],
})
export class EpisodeComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  sendComment(text: string) {
    if (text == '') {
      return;
    }
    this.appService.sendComment(text);
  }
}
