import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode5.component.html',
  styleUrls: ['./episode5.component.scss'],
})
export class Episode5Component implements OnInit {
  commentsList: any;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.appService.getComments('5').subscribe((x) => {
      this.commentsList = x.reverse();
    });
    //console.log(this.commentList);
  }

  sendComment(form: any) {
    this.appService.sendComment(form, '5');
    //this.getComments();
  }
}
