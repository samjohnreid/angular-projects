import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-votes',
  templateUrl: './user-votes.component.html',
  styleUrls: ['./user-votes.component.scss']
})
export class UserVotesComponent implements OnInit {

  user: {
    name: string
  };

  userVotes = {
    "sam": [
      {
        "picture": "sam picture",
        "director": "sam director",
        "actor": "sam actor"
      }
    ],
    "dave": [
      {
        "picture": "dave picture",
        "director": "dave director",
        "actor": "dave actor"
      }
    ],
    "bianca": [
      {
        "picture": "bianca picture",
        "director": "bianca director",
        "actor": "bianca actor"
      }
    ]
  }

  submitted = false;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name']
    };
  }

  welcomeMsg() {
    let name;
    if (this.user.name === 'dave') {
      name = 'Dave';
    } else if (this.user.name === 'sam') {
      name = 'Sam';
    } else if (this.user.name === 'bianca') {
      name = 'Bianca';
    }
    return `Hi, ${name}!`;
  }

  testFunc() {
    console.log(this.userVotes);
  }

  onSubmit(form: NgForm) {
    
    this.submitted = true;
    
    // this.userVotesSam.picture = form.value.bestPicture;
    // this.userVotesSam.director = form.value.bestDirector;
    // this.userVotesSam.actor = form.value.bestActor;
    
  }

}
