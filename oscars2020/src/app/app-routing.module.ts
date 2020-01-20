import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserVotesComponent } from './user-votes/user-votes.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { VotesTableComponent } from './votes-table/votes-table.component';
import { WinnersComponent } from './winners/winners.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'cast-votes/:name', component: UserVotesComponent },
  { path: 'results', component: ResultsTableComponent },
  { path: 'votes', component: VotesTableComponent },
  { path: 'winners', component: WinnersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
