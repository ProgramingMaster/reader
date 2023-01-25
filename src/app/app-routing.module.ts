import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EpisodeLoaderComponent } from './episodeLoader/episodeLoader.component';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'episode1', redirectTo: 'episode/1' },
  { path: 'episode2', redirectTo: 'episode/2' },
  { path: 'episode3', redirectTo: 'episode/3' },
  { path: 'episode4', redirectTo: 'episode/4' },
  { path: 'episode5', redirectTo: 'episode/5' },
  { path: 'episode6', redirectTo: 'episode/6' },
  { path: 'episode7', redirectTo: 'episode/7' },
  { path: 'episode8', redirectTo: 'episode/8' },
  { path: 'episode9', redirectTo: 'episode/9' },
  { path: 'episode/:number', component: EpisodeLoaderComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
