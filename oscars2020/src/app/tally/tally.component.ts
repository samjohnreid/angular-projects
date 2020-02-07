import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tally',
  templateUrl: './tally.component.html',
  styleUrls: ['./tally.component.scss']
})
export class TallyComponent implements OnInit {

  postData: any;

  loadedPosts = [];
  loadedPostsBianca = [];
  loadedPostsBrett = [];
  loadedPostsDave = [];
  loadedPostsDom = [];
  loadedPostsSam = [];
  loadedPostsSissel = [];
  loadedPostsWinners = [];

  biancaWins: number;
  brettWins: number;
  daveWins: number;
  domWins: number;
  samWins: number;
  sisselWins: number;

  isFetching = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  tallyLoop(user) {
    if (eval(`this.${user}`).length >= 1) {
      const wins = eval(`this.${user}[0].results`);
      const winTally = [];
      for (let [key, value] of Object.entries(wins)) {
        if (value === 'win') {
          winTally.push(value);
        }
      }
      return winTally.length;
    } else {
      return 0;
    }
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get('https://ng-test-54e77.firebaseio.com/votes.json')
      .pipe(map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        this.isFetching = false;
        
        this.loadedPosts = posts;
        this.loadedPostsBianca = posts.filter(votesByUser => votesByUser.id === 'bianca');
        this.loadedPostsBrett = posts.filter(votesByUser => votesByUser.id === 'brett');
        this.loadedPostsDave = posts.filter(votesByUser => votesByUser.id === 'dave');
        this.loadedPostsDom = posts.filter(votesByUser => votesByUser.id === 'dom');
        this.loadedPostsSam = posts.filter(votesByUser => votesByUser.id === 'sam');
        this.loadedPostsSissel = posts.filter(votesByUser => votesByUser.id === 'sissel');
        this.loadedPostsWinners = posts.filter(votesByUser => votesByUser.id === 'winners');
        
        this.biancaWins = this.tallyLoop('loadedPostsBianca');
        this.brettWins = this.tallyLoop('loadedPostsBrett');
        this.daveWins = this.tallyLoop('loadedPostsDave');
        this.domWins = this.tallyLoop('loadedPostsDom');
        this.samWins = this.tallyLoop('loadedPostsSam');
        this.sisselWins = this.tallyLoop('loadedPostsSissel');
    });
  }

}
