import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { IOption } from '../../../ui/interfaces/option';

@Component({
  selector: 'page-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class PageSelectsComponent implements OnInit {
	data: IOption;
	private url: string;
	
  constructor( private dataSv: DataService ) {
		this.url = '../../../../assets/data/options.json';
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
