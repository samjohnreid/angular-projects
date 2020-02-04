import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserVotesComponent } from './user-votes/user-votes.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { VotesTableComponent } from './votes-table/votes-table.component';
import { WinnersComponent } from './winners/winners.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserVotesComponent,
    ResultsTableComponent,
    VotesTableComponent,
    WinnersComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
