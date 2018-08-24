import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {
  experiences: FirebaseListObservable<any[]>;

   currentRoute: string = this.router.url;

  constructor(private router: Router, private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }

}
