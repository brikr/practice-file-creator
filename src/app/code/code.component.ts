import * as _ from 'lodash';

import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  @Input() courses;
  code;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    let bits = {};
    for (let course of this.courses) {
      for (let star of course.stars) {
        let mask = star.checked ? star.mask : 0;
        let offset = star.offset;
        if (star.offset % 2 == 0) {
          // even address
          mask <<= 8;
        } else {
          // odd address
          offset--;
        }
        if (_.has(bits, offset)) {
          bits[offset] |= mask;
        } else {
          bits[offset] = mask;
        }
      }
    }
    this.code = '';
    for(let [key, value] of _.entries(bits)) {
      let offset = ('0' + parseInt(key).toString(16)).substr(-2).toUpperCase();
      let mask = ('000' + parseInt(value.toString()).toString(16)).substr(-4).toUpperCase();
      this.code += `81207B${offset} ${mask}\n`;
    }
  }
}
