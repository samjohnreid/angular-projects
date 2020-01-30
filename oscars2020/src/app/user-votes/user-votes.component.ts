import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-votes',
  templateUrl: './user-votes.component.html',
  styleUrls: ['./user-votes.component.scss']
})
export class UserVotesComponent implements OnInit {

  user: {
    name: string
  };

  userVotes: any = {
    sam: {
      user: "",
      picture: "",
      director: "",
      actor: "",
      actress: "",
      supportingActor: "",
      supportingActress: "",
      originalScreenplay: "",
      adaptedScreenplay: "",
      animatedFeature: "",
      visualEffects: "",
      costumeDesign: "",
      makeupAndHairstyling: ""
    },
    dave: {
      user: "",
      picture: "",
      director: "",
      actor: "",
      actress: "",
      supportingActor: "",
      supportingActress: "",
      originalScreenplay: "",
      adaptedScreenplay: "",
      animatedFeature: "",
      visualEffects: "",
      costumeDesign: "",
      makeupAndHairstyling: ""
    },
    bianca: {
      user: "",
      picture: "",
      director: "",
      actor: "",
      actress: "",
      supportingActor: "",
      supportingActress: "",
      originalScreenplay: "",
      adaptedScreenplay: "",
      animatedFeature: "",
      visualEffects: "",
      costumeDesign: "",
      makeupAndHairstyling: ""
    },
    dom: {
      user: "",
      picture: "",
      director: "",
      actor: "",
      actress: "",
      supportingActor: "",
      supportingActress: "",
      originalScreenplay: "",
      adaptedScreenplay: "",
      animatedFeature: "",
      visualEffects: "",
      costumeDesign: "",
      makeupAndHairstyling: ""
    }
  };

  submitted: boolean = false;
  
  postData: any;

  loadedPosts = [];

  isFetching = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name']
    };

    this.fetchPosts();
  }

  userVotesObject() {
    switch(this.user.name) {
      case 'sam':
        return this.userVotes.sam;
      case 'dave':
        return this.userVotes.dave;
      case 'bianca':
        return this.userVotes.bianca;
      case 'dom':
        return this.userVotes.dom;
    }
  }

  onSubmit(form: NgForm) {

    this.submitted = true;

    this.userVotesObject().user = this.user.name;
    
    this.userVotesObject().picture = form.value.picture;
    this.userVotesObject().director = form.value.director;
    this.userVotesObject().actor = form.value.actor;
    this.userVotesObject().actress = form.value.actress;
    this.userVotesObject().supportingActor = form.value.supportingActor;
    this.userVotesObject().supportingActress = form.value.supportingActress;
    this.userVotesObject().originalScreenplay = form.value.originalScreenplay;
    this.userVotesObject().adaptedScreenplay = form.value.adaptedScreenplay;
    this.userVotesObject().animatedFeature = form.value.animatedFeature;
    this.userVotesObject().visualEffects = form.value.visualEffects;
    this.userVotesObject().costumeDesign = form.value.costumeDesign;
    this.userVotesObject().makeupAndHairstyling = form.value.makeupAndHairstyling;

    console.log(this.userVotesObject());

    this.postData = this.userVotesObject();

    // this.http.post(
    //   'https://ng-test-54e77.firebaseio.com/posts.json',
    //   this.postData
    // ).subscribe(responseData => {
    //   console.log(responseData);
    // });

  }

  onFetchPosts() {
    // Send HTTP request
    this.fetchPosts();
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get('https://ng-test-54e77.firebaseio.com/posts.json')
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
        console.log(posts);
    });
  }

}