import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature: string = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD0kBtw9B_Y1qmYkLKRarv-_aVDGIFJkKA",
      authDomain: "ng-recipe-book-1fb60.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
