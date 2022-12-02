import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode1.component.html',
  styleUrls: ['./episode1.component.scss'],
})
export class EpisodeComponent implements OnInit {
  commentsList: any;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.appService.getComments('1').subscribe((x) => {
      this.commentsList = x.reverse();
    });
    //console.log(this.commentList);
  }

  sendComment(form: any) {
    this.appService.sendComment(form, '1');
    //this.getComments();
  }
}
