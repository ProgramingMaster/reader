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
import { EpnavComponent } from './epnav/epnav.component';
import { EpnavbottomComponent } from './epnavbottom/epnavbottom.component';
import { CommentsComponent } from './commentBox/commentBox.component';
import { CommentComponent } from './commentBox/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    HomeComponent,
    EpisodeComponent,
    EpnavComponent,
    EpnavbottomComponent,
    CommentsComponent,
    CommentComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
