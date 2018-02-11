declare var _: any;

import { Component, OnInit } from '@angular/core';
import { presets } from '../courses'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  presets;
  courses;

  constructor() {
    this.presets = presets;
    this.courses = _.cloneDeep(presets[0].courses);
  }

  ngOnInit() {
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
  }

  onStarChange(star) {
    star.checked = !star.checked;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
