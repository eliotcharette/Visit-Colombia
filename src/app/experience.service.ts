import { Injectable } from '@angular/core';
import { Experience } from './experience.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ExperienceService {
  experiences: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.experiences = database.list('experiences');
  }
  getExperiences() {
    return this.experiences;
  }

}
