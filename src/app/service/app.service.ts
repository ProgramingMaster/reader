import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private db: AngularFireDatabase) {}

  sendComment(form: any, episode: string) {
    let text = form.text;
    let name;
    if (text == '') {
      return;
    }
    if (form.name == '') {
      name = 'Anonymous';
    } else {
      name = form.name;
    }
    this.db.list(`episode${episode}/commentsList`).push({
      name: name,
      text: text,
      time: new Date().toDateString(),
    });
  }

  getComments(episode: string) {
    let commentsList = this.db.list(`episode${episode}/commentsList`);
    return commentsList.valueChanges();
  }

  // like(number: Number) {
  //   let currentLikes = this.db.list(`episode${number}`);

  //   this.db.list(`episode${number}`).push({
  //     likes: 0
  //   });
  // }
}
