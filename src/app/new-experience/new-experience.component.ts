import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css'],
  providers: [ExperienceService]
})
export class NewExperienceComponent implements OnInit {

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
  }
  submitForm(title: string, author: string, date: string, description: string) {
    var newExperience: Experience = new Experience(title, author, date, description);
    this.experienceService.addExperience(newExperience);
  }

}
