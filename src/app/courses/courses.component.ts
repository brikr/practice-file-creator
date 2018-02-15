import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { presets } from '../courses'

import { faDiscord, faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  faDiscord = faDiscord;
  faGithub = faGithub;
  faTwitter = faTwitter;
  presets;
  courses;
  debugBoolean;

  constructor() {
    this.presets = presets;
    this.courses = _.cloneDeep(presets[0].courses);
  }

  ngOnInit() {
  }

  onExportClick() {
    this.debugBoolean = JSON.stringify(
      _.map(this.courses, (course: any) => {
        return _.map(course.stars, (star: any) => {
          return star.checked;
        });
      })
    );
  }

  onPresetClick(preset) {
    this.courses = _.cloneDeep(preset.courses);
  }

  onCourseClick(course) {
    if (course.stars.every(s => s.checked)) {
      for(let star of course.stars) {
        star.checked = false;
      }
    } else {
      for(let star of course.stars) {
        star.checked = true;
      }
    }
    this.courses = _.cloneDeep(this.courses); // deep clone triggers ngOnChanges
  }

  onStarChange(star) {
    star.checked = !star.checked;
    this.courses = _.cloneDeep(this.courses); // deep clone triggers ngOnChanges
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
