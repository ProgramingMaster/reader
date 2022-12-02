import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EpisodeComponent } from './episode1/episode1.component';
import { Episode2Component } from './episode2/episode2.component';
import { Episode3Component } from './episode3/episode3.component';
import { Episode4Component } from './episode4/episode4.component';
import { Episode5Component } from './episode5/episode5.component';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'episode1', component: EpisodeComponent },
  { path: 'episode2', component: Episode2Component },
  { path: 'episode3', component: Episode3Component },
  { path: 'episode4', component: Episode4Component },
  { path: 'episode5', component: Episode5Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
