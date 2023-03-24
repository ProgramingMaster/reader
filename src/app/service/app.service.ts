import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { first } from 'rxjs/operators';

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
    //console.log(this.db.object(`episode${episode}/likes`).valueChanges());

    return this.db.object(`episode${episode}/likes`).valueChanges();
  }

  addLike(episode: any) {
    this.getLikes(episode)
      .pipe(first())
      .subscribe((x) => {
        //console.log('Getlikes: ' + x);
        if (x == null) {
          this.db.object(`episode${episode}/likes`).set({
            likes: 1,
          });
        } else {
          // console
          //   //@ts-ignore
          //   .log(typeof (x.likes + 1 + ''));
          this.db
            .object(`episode${episode}/likes`)
            //@ts-ignore
            .update({ likes: Number(x.likes) + 1 });
        }
      });

    // ((x) => {
    //   //current_likes = x;
    //   //@ts-ignore
    //   console.log(x[0].likes);
    //   //@ts-ignore
    //   if (x == undefined) {
    //     this.db.object(`episode${episode}/likes`).set({
    //       likes: '1',
    //     });
    //   } else {
    //     console
    //       //@ts-ignore
    //       .log(typeof (x[0].likes + 1 + ''));
    //     this.db
    //       .object(`episode${episode}/likes`)
    //       //@ts-ignore
    //       .update({ likes: x[0].likes + 1 });
    //   }
    // });
  }

  like(number: Number) {
    let currentLikes = this.db.list(`episode${number}`);

    this.db.list(`episode${number}`).push({
      likes: 0,
    });
  }
}
