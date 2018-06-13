import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActorstestComponent} from './modules/test/actorstest/actorstest.component';
import {AppComponent} from './app.component';
import {NothingComponent} from './modules/test/nothing/nothing.component';
import {MoviestestComponent} from './modules/test/moviestest/moviestest.component';
import {DetailsComponent} from './modules/test/details/details.component';
import {HttptestComponent} from './modules/test/httptest/httptest.component';
import {CastComponent} from './modules/test/cast/cast.component';

const routes: Routes = [
  { path: 'home', component: NothingComponent },
  { path: 'actors', component: ActorstestComponent },
  { path: 'Details/:id', component: DetailsComponent },
  { path: 'movies', component: MoviestestComponent },
  { path: 'moviesfromapy', component: HttptestComponent },
  { path: 'Cast/:id', component: CastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
