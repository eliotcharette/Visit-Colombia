import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ExperienceService]
})
export class AdminComponent implements OnInit {
  @Input() selectedExperience;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
  }

  updateThisPost(postToUpdate){
    this.experienceService.updatePost(postToUpdate);
  }
  deleteThisExperience(postToDelete){
    if(confirm("Are you sure you want to permanantly delete this item")){
      this.experienceService.deletePost(postToDelete);
    }
  }

}
