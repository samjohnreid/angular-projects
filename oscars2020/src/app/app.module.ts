import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserVotesComponent } from './user-votes/user-votes.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { VotesTableComponent } from './votes-table/votes-table.component';
import { WinnersComponent } from './winners/winners.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserVotesComponent,
    ResultsTableComponent,
    VotesTableComponent,
    WinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
