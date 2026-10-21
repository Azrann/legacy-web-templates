import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class PageSlidersComponent implements OnInit {
	range: number[];

	constructor() {
		this.range = [20, 50];
	 }

  ngOnInit() { }
}
