///<reference path="../../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {TwitterService} from "../twitter-service.service";
import {Tweet} from "../tweets.interface";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
// export class FavoritesComponent {
//   tweetslist;
//
//   constructor(private twitterService:TwitterService) {
//   this.tweetslist = this.twitterService.favoritesCall();
// }
//
//   // favoritesCall() {
//   //   var headers = new Headers();
//   //   // var searchterm = 'query=' + this.searchquery;
//   //
//   //   headers.append('Content-Type', 'application/X-www-form-urlencoded');
//   //
//   //   this.http.post('http://localhost:3000/favorites',  {headers: headers}).subscribe((res) => {
//   //     this.tweetslist = res.json().data;
//   //     console.log(this.tweetslist);
//   //   });
//   // }
//
// }

export class FavoritesComponent implements OnInit {
  errorMessage: string;
  tweets: Tweet[];


  constructor(private _TwitterService: TwitterService) { }

  ngOnInit() {
    this._TwitterService.getTweets()
      .subscribe(
        tweets => this.tweets = tweets,
        error =>  this.errorMessage = <any>error);
  }
}
