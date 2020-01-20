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
  
  userVotesSam = {
    picture: '',
    director: '',
    actor: ''
  };

  userVotesDave = {
    picture: '',
    director: '',
    actor: ''
  };

  submitted = false;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name']
    };
  }

  onSubmit(form: NgForm) {
    
    this.submitted = true;
    
    this.userVotesSam.picture = form.value.bestPicture;
    this.userVotesSam.director = form.value.bestDirector;
    this.userVotesSam.actor = form.value.bestActor;
    
  }

}
