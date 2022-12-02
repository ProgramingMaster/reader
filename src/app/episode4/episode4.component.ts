import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode4.component.html',
  styleUrls: ['./episode4.component.scss'],
})
export class Episode4Component implements OnInit {
  commentsList: any;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.appService.getComments('4').subscribe((x) => {
      this.commentsList = x.reverse();
    });
    //console.log(this.commentList);
  }

  sendComment(form: any) {
    this.appService.sendComment(form, '4');
    //this.getComments();
  }
}
