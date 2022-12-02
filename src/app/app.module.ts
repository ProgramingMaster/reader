import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { LinkComponent } from './home/link/link.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { EpisodeComponent } from './episode1/episode1.component';
import { Episode2Component } from './episode2/episode2.component';
import { EpnavComponent } from './epnav/epnav.component';
import { CommentsComponent } from './commentBox/commentBox.component';
import { CommentComponent } from './commentBox/comment/comment.component';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { SocialComponent } from './home/social/social.component';
import { Episode3Component } from './episode3/episode3.component';
import { Episode4Component } from './episode4/episode4.component';
import { Episode5Component } from './episode5/episode5.component';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    HomeComponent,
    EpisodeComponent,
    Episode2Component,
    EpnavComponent,
    CommentsComponent,
    CommentComponent,
    SocialComponent,
    Episode3Component,
    Episode4Component,
    Episode5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material
    MatCardModule,
    MatDividerModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
