import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {

  postData: any;

  loadedPosts = [];
  loadedPostsBianca = [];
  loadedPostsBrett = [];
  loadedPostsDave = [];
  loadedPostsDom = [];
  loadedPostsSam = [];
  loadedPostsSissel = [];
  loadedPostsWinners = [];

  isFetching = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
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
    });
  }

}
