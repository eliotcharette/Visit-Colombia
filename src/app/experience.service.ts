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
  addExperience(newExperience: Experience){
    this.experiences.push(newExperience);
  }
  getExperienceId(experienceId: string){
    return this.database.object('experiences/' + experienceId);
  }
  updatePost(localUpdatedPost){
  var postEntryInFirebase = this.getExperienceId(localUpdatedPost.$key);
  postEntryInFirebase.update({title: localUpdatedPost.title,
    author: localUpdatedPost.author,
    date: localUpdatedPost.date,
    description: localUpdatedPost.description});

}
deletePost(localPostToDelete){
  var postEntryInFirebase = this.getExperienceId(localPostToDelete.$key);
  postEntryInFirebase.remove();
}

}
