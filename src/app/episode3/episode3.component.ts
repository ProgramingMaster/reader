import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode3.component.html',
  styleUrls: ['./episode3.component.scss'],
})
export class Episode3Component implements OnInit {
  commentsList: any;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.appService.getComments('3').subscribe((x) => {
      this.commentsList = x.reverse();
    });
    //console.log(this.commentList);
  }

  sendComment(form: any) {
    this.appService.sendComment(form, '3');
    //this.getComments();
  }
}
