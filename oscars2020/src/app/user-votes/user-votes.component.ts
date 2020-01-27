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

  userVotes: any = {
    sam: {
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name']
    };
  }

  userVotesObject() {
    switch(this.user.name) {
      case 'sam':
        return this.userVotes.sam;
      case 'dave':
        return this.userVotes.dave;
      case 'dom':
        return this.userVotes.dom;
    }
  }

  onSubmit(form: NgForm) {

    this.submitted = true;

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

  }

}