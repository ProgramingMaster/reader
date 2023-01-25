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

  getLikes(episode: any) {
    return this.db.list(`episode${episode}/likes`).valueChanges();
  }

  addLike(episode: any) {
    let current_likes;

    this.getLikes(episode).subscribe((x) => {
      current_likes = x;
    });

    if (current_likes == undefined) {
      this.db.list(`episode${episode}/likes`).push({
        likes: '1',
      });
    } else {
      this.db
        .list(`episode${episode}/likes`)
        .update('likes', current_likes + 1);
    }
  }

  // like(number: Number) {
  //   let currentLikes = this.db.list(`episode${number}`);

  //   this.db.list(`episode${number}`).push({
  //     likes: 0
  //   });
  // }
}
