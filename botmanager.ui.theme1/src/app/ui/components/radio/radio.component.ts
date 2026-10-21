import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class TCRadioComponent implements OnInit {
  @Input() direction: string;
  @HostBinding('class.tc-radio') true;
  @HostBinding('class.tc-radio-horizontal') get getDirection() {
    return this.direction === 'horizontal';
  }

  constructor() { }

  ngOnInit() { }
}
