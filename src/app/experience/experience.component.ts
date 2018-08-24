import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
