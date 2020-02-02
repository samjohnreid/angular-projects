import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  userResults: any = {
    bianca: {
      results: {
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
        makeupAndHairstyling: "",
      }
    },
    dave: {
      results: {
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
        makeupAndHairstyling: "",
      }
    },
    dom: {
      results: {
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
        makeupAndHairstyling: "",
      }
    },
    sam: {
      results: {
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
        makeupAndHairstyling: "",
      }
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

  oscarWinners = {
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
  };
  
  postData: any;

  loadedPosts = [];
  loadedPostsBianca = [];
  loadedPostsDave = [];
  loadedPostsDom = [];
  loadedPostsSam = [];
  loadedPostsWinners = [];

  isFetching = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onSubmit(form: NgForm) {
    const pictureValue = form.value.picture;
    this.checkVoteAndUpdateWin(pictureValue, 'picture', 'Bianca');
    this.checkVoteAndUpdateWin(pictureValue, 'picture', 'Dave');
    this.checkVoteAndUpdateWin(pictureValue, 'picture', 'Dom');
    this.checkVoteAndUpdateWin(pictureValue, 'picture', 'Sam');

    const directorValue = form.value.director;
    this.checkVoteAndUpdateWin(directorValue, 'director', 'Bianca');
    this.checkVoteAndUpdateWin(directorValue, 'director', 'Dave');
    this.checkVoteAndUpdateWin(directorValue, 'director', 'Dom');
    this.checkVoteAndUpdateWin(directorValue, 'director', 'Sam');

    const actorValue = form.value.actor;
    this.checkVoteAndUpdateWin(actorValue, 'actor', 'Bianca');
    this.checkVoteAndUpdateWin(actorValue, 'actor', 'Dave');
    this.checkVoteAndUpdateWin(actorValue, 'actor', 'Dom');
    this.checkVoteAndUpdateWin(actorValue, 'actor', 'Sam');
    
    const actressValue = form.value.actress;
    this.checkVoteAndUpdateWin(actressValue, 'actress', 'Bianca');
    this.checkVoteAndUpdateWin(actressValue, 'actress', 'Dave');
    this.checkVoteAndUpdateWin(actressValue, 'actress', 'Dom');
    this.checkVoteAndUpdateWin(actressValue, 'actress', 'Sam');

    const supportingActorValue = form.value.supportingActor;
    this.checkVoteAndUpdateWin(supportingActorValue, 'supportingActor', 'Bianca');
    this.checkVoteAndUpdateWin(supportingActorValue, 'supportingActor', 'Dave');
    this.checkVoteAndUpdateWin(supportingActorValue, 'supportingActor', 'Dom');
    this.checkVoteAndUpdateWin(supportingActorValue, 'supportingActor', 'Sam');

    const supportingActressValue = form.value.supportingActress;
    this.checkVoteAndUpdateWin(supportingActressValue, 'supportingActress', 'Bianca');
    this.checkVoteAndUpdateWin(supportingActressValue, 'supportingActress', 'Dave');
    this.checkVoteAndUpdateWin(supportingActressValue, 'supportingActress', 'Dom');
    this.checkVoteAndUpdateWin(supportingActressValue, 'supportingActress', 'Sam');

    const originalScreenplayValue = form.value.originalScreenplay;
    this.checkVoteAndUpdateWin(originalScreenplayValue, 'originalScreenplay', 'Bianca');
    this.checkVoteAndUpdateWin(originalScreenplayValue, 'originalScreenplay', 'Dave');
    this.checkVoteAndUpdateWin(originalScreenplayValue, 'originalScreenplay', 'Dom');
    this.checkVoteAndUpdateWin(originalScreenplayValue, 'originalScreenplay', 'Sam');

    const adaptedScreenplayValue = form.value.adaptedScreenplay;
    this.checkVoteAndUpdateWin(adaptedScreenplayValue, 'adaptedScreenplay', 'Bianca');
    this.checkVoteAndUpdateWin(adaptedScreenplayValue, 'adaptedScreenplay', 'Dave');
    this.checkVoteAndUpdateWin(adaptedScreenplayValue, 'adaptedScreenplay', 'Dom');
    this.checkVoteAndUpdateWin(adaptedScreenplayValue, 'adaptedScreenplay', 'Sam');

    const animatedFeatureValue = form.value.animatedFeature;
    this.checkVoteAndUpdateWin(animatedFeatureValue, 'animatedFeature', 'Bianca');
    this.checkVoteAndUpdateWin(animatedFeatureValue, 'animatedFeature', 'Dave');
    this.checkVoteAndUpdateWin(animatedFeatureValue, 'animatedFeature', 'Dom');
    this.checkVoteAndUpdateWin(animatedFeatureValue, 'animatedFeature', 'Sam');

    const visualEffectsValue = form.value.visualEffects;
    this.checkVoteAndUpdateWin(visualEffectsValue, 'visualEffects', 'Bianca');
    this.checkVoteAndUpdateWin(visualEffectsValue, 'visualEffects', 'Dave');
    this.checkVoteAndUpdateWin(visualEffectsValue, 'visualEffects', 'Dom');
    this.checkVoteAndUpdateWin(visualEffectsValue, 'visualEffects', 'Sam');

    const costumeDesignValue = form.value.costumeDesign;
    this.checkVoteAndUpdateWin(costumeDesignValue, 'costumeDesign', 'Bianca');
    this.checkVoteAndUpdateWin(costumeDesignValue, 'costumeDesign', 'Dave');
    this.checkVoteAndUpdateWin(costumeDesignValue, 'costumeDesign', 'Dom');
    this.checkVoteAndUpdateWin(costumeDesignValue, 'costumeDesign', 'Sam');

    const makeupAndHairstylingValue = form.value.makeupAndHairstyling;
    this.checkVoteAndUpdateWin(makeupAndHairstylingValue, 'makeupAndHairstyling', 'Bianca');
    this.checkVoteAndUpdateWin(makeupAndHairstylingValue, 'makeupAndHairstyling', 'Dave');
    this.checkVoteAndUpdateWin(makeupAndHairstylingValue, 'makeupAndHairstyling', 'Dom');
    this.checkVoteAndUpdateWin(makeupAndHairstylingValue, 'makeupAndHairstyling', 'Sam');

    this.pushWinnerData();

    this.oscarWinners.picture = form.value.picture;
    this.oscarWinners.director = form.value.director;
    this.oscarWinners.actor = form.value.actor;
    this.oscarWinners.actress = form.value.actress;
    this.oscarWinners.supportingActor = form.value.supportingActor;
    this.oscarWinners.supportingActress = form.value.supportingActress;
    this.oscarWinners.originalScreenplay = form.value.originalScreenplay;
    this.oscarWinners.adaptedScreenplay = form.value.adaptedScreenplay;
    this.oscarWinners.animatedFeature = form.value.animatedFeature;
    this.oscarWinners.visualEffects = form.value.visualEffects;
    this.oscarWinners.costumeDesign = form.value.costumeDesign;
    this.oscarWinners.makeupAndHairstyling = form.value.makeupAndHairstyling;
    
    this.postData = this.oscarWinners;

    this.http.put(
      'https://ng-test-54e77.firebaseio.com/votes/winners.json',
      this.postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  checkVoteAndUpdateWin(winner, category, user) {
    if (eval(`this.loadedPosts${user}.length >= 1`)) {
      const userVote = eval(`this.loadedPosts${user}[0].${category}`);
      user = user.toLowerCase();
      if (winner && userVote === winner) {
        eval(`this.userResults.${user}.results.${category} = 'win'`);
      } else if (winner && userVote !== winner) {
        eval(`this.userResults.${user}.results.${category} = 'lose'`);
      }
      return this.userResults;
    }
  }

  pushWinnerData() {
    if (this.loadedPostsBianca.length >= 1) {
      this.postData = this.userResults.bianca.results;
      this.http.put(
        'https://ng-test-54e77.firebaseio.com/votes/bianca/results.json',
        this.postData
      ).subscribe(responseData => {
        console.log(responseData);
      });
    }

    if (this.loadedPostsDave.length >= 1) {
      this.postData = this.userResults.dave.results;
      this.http.put(
        'https://ng-test-54e77.firebaseio.com/votes/dave/results.json',
        this.postData
      ).subscribe(responseData => {
        console.log(responseData);
      });
    }

    if (this.loadedPostsDom.length >= 1) {
      this.postData = this.userResults.dom.results;
      this.http.put(
        'https://ng-test-54e77.firebaseio.com/votes/dom/results.json',
        this.postData
      ).subscribe(responseData => {
        console.log(responseData);
      });
    }

    if (this.loadedPostsSam.length >= 1) {
      this.postData = this.userResults.sam.results;
      this.http.put(
        'https://ng-test-54e77.firebaseio.com/votes/sam/results.json',
        this.postData
      ).subscribe(responseData => {
        console.log(responseData);
      });
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
        this.loadedPostsDave = posts.filter(votesByUser => votesByUser.id === 'dave');
        this.loadedPostsDom = posts.filter(votesByUser => votesByUser.id === 'dom');
        this.loadedPostsSam = posts.filter(votesByUser => votesByUser.id === 'sam');
        this.loadedPostsWinners = posts.filter(votesByUser => votesByUser.id === 'winners');
    });
  }

}
