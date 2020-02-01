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

  deadlineExpired: boolean = false;
  
  user: {
    name: string
  };

  screenName: string;

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

  categoryPicture = [
    "Ford v Ferrari",
    "The Irishman",
    "Jojo Rabbit",
    "Joker",
    "Little Women",
    "Marriage Story",
    "1917",
    "Once Upon a Time in Hollywood",
    "Parasite"
  ];

  categoryDirector = [
    "Martin Scorsese – The Irishman",
    "Todd Phillips – Joker",
    "Sam Mendes – 1917",
    "Quentin Tarantino – Once Upon a Time in Hollywood",
    "Bong Joon-ho – Parasite"
  ];

  categoryActor = [
    "Antonio Banderas – Pain and Glory",
    "Leonardo DiCaprio – Once Upon a Time in Hollywood",
    "Adam Driver – Marriage Story",
    "Joaquin Phoenix – Joker",
    "Jonathan Pryce – The Two Popes"
  ];

  categoryActress = [
    "Cynthia Erivo – Harriet",
    "Scarlett Johansson – Marriage Story",
    "Saoirse Ronan – Little Women",
    "Charlize Theron – Bombshell",
    "Renée Zellweger – Judy"
  ];

  categorySupportingActor = [
    "Tom Hanks – A Beautiful Day in the Neighborhood",
    "Anthony Hopkins – The Two Popes",
    "Al Pacino – The Irishman",
    "Joe Pesci – The Irishman",
    "Brad Pitt – Once Upon a Time in Hollywood"
  ];

  categorySupportingActress = [
    "Kathy Bates – Richard Jewell",
    "Laura Dern – Marriage Story",
    "Scarlett Johansson – Jojo Rabbit",
    "Florence Pugh – Little Women",
    "Margot Robbie – Bombshell"
  ];

  categoryOriginalScreenplay = [
    "Knives Out – Rian Johnson",
    "Marriage Story – Noah Baumbach",
    "1917 – Sam Mendes and Krysty Wilson-Cairns",
    "Once Upon a Time in Hollywood – Quentin Tarantino",
    "Parasite – Bong Joon-ho and Han Jin-won"
  ];

  categoryAdaptedScreenplay = [
    "The Irishman – Steven Zaillian",
    "Jojo Rabbit – Taika Waititi",
    "Joker – Todd Phillips and Scott Silver",
    "Little Women – Greta Gerwig",
    "The Two Popes – Anthony McCarten"
  ];

  categoryAnimatedFeature = [
    "How to Train Your Dragon: The Hidden World",
    "I Lost My Body",
    "Klaus",
    "Missing Link",
    "Toy Story 4"
  ];

  categoryVisualEffects = [
    "Avengers: Endgame",
    "The Irishman",
    "The Lion King",
    "1917",
    "Star Wars: The Rise of Skywalker"
  ];

  categoryCostumeDesign = [
    "The Irishman",
    "Jojo Rabbit",
    "Joker",
    "Little Women",
    "Once Upon a Time in Hollywood"
  ];
  
  categoryMakeupAndHairstyling = [
    "Bombshell",
    "Joker",
    "Judy",
    "1917",
    "Maleficent: Mistress of Evil"
  ];
  
  postData: any;

  loadedPosts = [];

  isFetching = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name']
    };

    this.fetchPosts(this.user.name);
    this.userVotesObject();
  }

  userVotesObject() {
    switch(this.user.name) {
      case 'sam':
        this.screenName = 'Sam';
        return this.userVotes.sam;
      case 'dave':
        this.screenName = 'Dave';
        return this.userVotes.dave;
      case 'bianca':
        this.screenName = 'Bianca';
        return this.userVotes.bianca;
      case 'dom':
        this.screenName = 'Dommers';
        return this.userVotes.dom;
    }
  }

  onSubmit(form: NgForm) {
    
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

    this.postData = this.userVotesObject();

    this.http.put(
      'https://ng-test-54e77.firebaseio.com/votes/' + this.user.name + '.json',
      this.postData
    ).subscribe(responseData => {
      location.reload();
      console.log(responseData);
    });

  }

  private fetchPosts(user: string) {
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
        this.loadedPosts = posts.filter(votesByUser => votesByUser.user === user);
    });
  }

}