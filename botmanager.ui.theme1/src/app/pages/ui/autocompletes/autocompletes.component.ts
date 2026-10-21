import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-autocompletes',
  templateUrl: './autocompletes.component.html',
  styleUrls: ['./autocompletes.component.scss']
})
export class PageAutocompletesComponent implements OnInit {
	data: Array<String>;
  url: string;

  constructor(private dataSv: DataService) {
    this.url = '../../../../assets/data/autocomplete-data.json';
    this.data = [];
  }

	getData(url: string) {
		let observer = {
			next: x => this.data = x,
			error: err => this.dataSv.handleError(err)
		};
		this.dataSv.getData(url).subscribe(observer);
	}

  ngOnInit() {
		this.getData(this.url);
	}
}
