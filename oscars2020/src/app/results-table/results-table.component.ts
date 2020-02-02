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
  loadedPostsDave = [];
  loadedPostsDom = [];
  loadedPostsSam = [];

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
        this.loadedPostsDave = posts.filter(votesByUser => votesByUser.id === 'dave');
        this.loadedPostsDom = posts.filter(votesByUser => votesByUser.id === 'dom');
        this.loadedPostsSam = posts.filter(votesByUser => votesByUser.id === 'sam');
    });
  }

}
