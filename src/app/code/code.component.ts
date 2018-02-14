import * as _ from 'lodash';

import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  @Input() courses;
  slotOffsets = {
    jp: {
      'Slot A': 0x81207B00,
      'Slot B': 0x81207B70,
      'Slot C': 0x81207BE0,
      'Slot D': 0x81207C50
    },
    us: {
      'Slot A': 0x81207700,
      'Slot B': 0x81207770,
      'Slot C': 0x812077E0,
      'Slot D': 0x81207850
    }
  };
  slots = [
    'Slot A',
    'Slot B',
    'Slot C',
    'Slot D'
  ]
  selectedSlot = 'Slot A';
  jpCode;
  usCode;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.generateCodes();
  }

  generateCodes() {
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
    this.jpCode = '';
    this.usCode = '';
    for(let [key, value] of _.entries(bits)) {
      var jpOffset = (parseInt(key) + this.slotOffsets.jp[this.selectedSlot]).toString(16).toUpperCase();
      var usOffset = (parseInt(key) + this.slotOffsets.us[this.selectedSlot]).toString(16).toUpperCase();
      let mask = ('000' + parseInt(value.toString()).toString(16)).substr(-4).toUpperCase();
      this.jpCode += `${jpOffset} ${mask}\n`;
      this.usCode += `${usOffset} ${mask}\n`
    }
  }
}
