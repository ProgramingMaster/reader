import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode2.component.html',
  styleUrls: ['./episode2.component.scss'],
})
export class Episode2Component implements OnInit {
  commentsList: any;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.appService.getComments('2').subscribe((x) => {
      this.commentsList = x.reverse();
    });
    //console.log(this.commentList);
  }

  sendComment(form: any) {
    this.appService.sendComment(form, '2');
    //this.getComments();
  }
}
