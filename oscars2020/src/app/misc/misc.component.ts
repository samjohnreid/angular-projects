import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  miscOptions = {
    deadlineExpired: {
      value: false
    }
  };

  postData: any;

  loadedMiscOptions = [];
  loadedMiscOptionsDeadlineExpired = [];

  isFetching = false;

  deadlineExpiredValues = [
    "True",
    "False"
  ];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchMiscOptions();
  }

  onSubmit(form: NgForm) {
    
    this.miscOptions.deadlineExpired.value = form.value.deadlineExpired;

    this.postData = this.miscOptions;

    this.http.put(
      'https://ng-test-54e77.firebaseio.com/misc.json',
      this.postData
    ).subscribe(responseData => {
      console.log(responseData);
    });

  }

  private fetchMiscOptions() {
    this.isFetching = true;
    this.http
      .get('https://ng-test-54e77.firebaseio.com/misc.json')
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
        this.loadedMiscOptions = posts;
        this.loadedMiscOptionsDeadlineExpired = posts.filter(votesByUser => votesByUser.id === 'deadlineExpired');
    });
  }

}
