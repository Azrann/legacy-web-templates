import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class PageRadioButtonsComponent implements OnInit {
	radioGroup: FormGroup;
	radioBtn: string;

  constructor(private fb: FormBuilder) {
		this.radioGroup = fb.group({
			btn: new FormControl()
		});
	}

  ngOnInit() {}
}
