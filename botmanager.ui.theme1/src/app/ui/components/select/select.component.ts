import { Component, OnInit, HostBinding, Input, ElementRef, HostListener, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { IOption } from '../../interfaces/option';
import { selectShrink } from '../../../animations/selectShrink';
import { selectState } from '../../interfaces/general';

@Component({
  selector: 'tc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [selectShrink],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TCSelectComponent),
      multi: true
    }
  ]
})
export class TCSelectComponent implements OnInit, ControlValueAccessor {
	@HostBinding('class.tc-select') true;

	@Input() selectedValue: number;
  @Input() borderColor: string | string[];
  @Input() bgColor: string | string[];
  @Input() color: string | string[];
  @Input() shape: number | string;
  @Input() listBgColor: string;
  @Input() listColor: string;
  @Input() listBorderColor: string;
  @Input() listShape: number | string;

  @Input() options: IOption[];
  @Input() multiple: boolean;
	@Input() allowClear: boolean;
	@Input() filter: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Input() notFoundMsg: string;

  @Input() listHighlightBgColor: string;
	@Input() listHighlightTextColor: string;

	@Output() valueSelected: EventEmitter<any | any[]>;


  selectedOptions: Array<IOption>;
	selectedOption: IOption;
	selectState: any;
	filterForm: FormControl;
  opened: boolean;
  hover: boolean;
  mouseOver: boolean;
	selected: boolean;
  arrowKeyLocation: number;
	_value: string | string[];
	optionHovered: boolean;

	currentBgColor: string;
	currentColor: string;
	currentBorderColor: string;

  onChange = (value: string | string[]) => {};
  onTouched = () => {};

  constructor( private elementRef: ElementRef ) {
		this.selectState = selectState;
    this.selected = false;
    this.hover = false;
    this.arrowKeyLocation = -1;
    this.selectedOption = {
      label: '',
      value: ''
		};
		this.options = [];
    this.shape = 0;
    this.listShape = 0;
    this.selectedOptions = [];
    this.allowClear = false;
    this.multiple = false;
		this.disabled = false;
		this.filter = false;
		this.filterForm = new FormControl('');
    this.notFoundMsg = 'There are no options !';
    this.opened = false;
		this.mouseOver = false;
		this.valueSelected = new EventEmitter();
	}

	@HostListener('mouseover')
  onMouseEnter() {
		if (!this.opened) {
			this.setStyles(this.selectState.hover);
		}
		this.mouseOver = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
		if (!this.opened) {
			this.setStyles(this.selectState.default);
		}
		this.mouseOver = false;
  }

	@HostListener('document:click', ['$event'])
	public handlelClick(event: Event) {
		if (this.opened) {
			if (!this.elementRef.nativeElement.contains(event.target)) {
				this.opened = false;
			}
		}
  }

  public toggleList(event) {
		this.opened = !this.opened;
		if (this.opened) {
			this.setStyles(this.selectState.opened);
		} else {
			this.setStyles(this.selectState.default);
		}
  }

  public optionSelected(option: IOption): boolean {
    if (this.multiple) {
      return this.selectedOptions.includes(option);
    } else {
      return this.selectedOption === option;
		}
		this.valueSelected.emit(option.value);
  }

  public clearOption(event?, option?: IOption) {
    event.stopPropagation();
    if (this.multiple) {
      this.clearMultiple(option);
    } else {
      this.clearSingle();
    }
    this.selected = false;
  }

  public multipleClick(option: IOption, selected: boolean) {
    if (selected) {
			this.clearMultiple(option);
			this.selected = false;
    } else {
      this.selectedOptions.push(option);
      this.arrowKeyLocation = -1;
		}
		this.valueSelected.emit(this.selectedOptions);
	}

	public showMultiplePlaceholder() {
		return this.selectedOptions.length === 0;
	}

	public set value(value: string | string[]) {
		this._value = value;
		this.writeValue(value);
		this.onChange(value);
	}

  public singleClick(option: IOption) {
		this.selectedOption = option;
		this.value = option.value;
  }

  public optionClick(event: Event, option: IOption, selected: boolean) {
		event.preventDefault();
    if (this.multiple) {
      this.multipleClick(option, selected);
    } else {
      this.singleClick(option);
    }
		this.selected = true;
		this.toggleList(event);
		this.valueSelected.emit(option.value);
  }

  public selectItem(value: number) {
    let selectedOption = this.options[value];
		let selected = this.optionSelected(selectedOption);
		this.selected = true;
    if (this.multiple) {
      this.multipleClick(selectedOption, selected);
    } else {
      this.singleClick(selectedOption);
    }
    this.arrowKeyLocation = -1;
    this.opened = false;
  }

  public clearMultiple(option: IOption) {
    let index = this.selectedOptions.indexOf(option, 0);
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
		}
		this.selected = false;
  }

  public clearSingle() {
    this.selectedOption = {
      label: '',
      value: ''
    };
  }

  public getSelectStyles() {
    return {
      'color': this.currentColor,
      'background': this.currentBgColor,
      'border-color': this.currentBorderColor,
      'border-radius': this.getShape(this.shape)
    };
  }

  public getListStyles() {
    return {
			'color': this.listColor,
			'background': this.listBgColor,
			'border-color': this.listBorderColor,
      'border-radius': this.getShape(this.listShape) || this.getShape(this.shape)
    };
  }

  public getShape(shape: number | string): string {
    if (typeof shape === 'number') {
      return shape.toString() + 'px';
    } else if (typeof shape === 'string') {
      return shape;
    } else {
      return '';
    }
  }

  public getOptionsStyle(selected: boolean) {
    if (selected) {
      return {
        'color': this.listHighlightTextColor,
        'background': this.listHighlightBgColor
      };
    }
  }

  public get value() {
    if (this.multiple) {
    	let valueArr: string[] = [];
    	this.selectedOptions.forEach((element: IOption) => {
    		valueArr.push(element.value);
    	});
    	return <string[]>valueArr;
    } else {
    	return <string>this._value;
    }
  }

  writeValue(value: string | string[]): void {
    this._value = value;
		this.onChange(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
	}
	getOptions(): Array<IOption> {
		return this.options.filter((option: IOption) => {
			return option.label.toString().toLowerCase().startsWith(this.filterForm.value.toString().toLowerCase());
		});
	}

	setStyles(
			st: selectState,
			bg: string | string[] = this.bgColor,
			border: string | string[] = this.borderColor,
			color: string | string[] = this.color
		) {
			let styleIndex: number = 0;
			switch (st) {
				case this.selectState.hover:
					styleIndex = 1;
					break;
				case this.selectState.opened:
					styleIndex = 2;
					break;
				case this.selectState.disabled:
					styleIndex = 3;
					break;
				default:
					styleIndex = 0;
			}

		this.currentBgColor = bg instanceof Array ? bg[styleIndex] : bg;
		this.currentBorderColor = border instanceof Array ? border[styleIndex] : border;
		this.currentColor = color instanceof Array ? color[styleIndex] : color;
	}

	onkeypress(e: KeyboardEvent) {
		switch (e.keyCode) {
			case 13:
				if (this.arrowKeyLocation > -1) {
					this.selectItem(this.arrowKeyLocation);
				}
				break;
			case 38:
				this.opened = true;
				if (this.arrowKeyLocation <= 0) {
					this.arrowKeyLocation = this.options.length - 1;
				} else {
					this.arrowKeyLocation--;
				}
				break;
			case 40:
				this.opened = true;
				if (this.arrowKeyLocation == this.options.length - 1) {
					this.arrowKeyLocation = 0;
				} else {
					this.arrowKeyLocation++;
				}
				break;
		}
	}

  ngOnInit() {
		this.currentBgColor = this.bgColor instanceof Array ? this.bgColor[0] : this.bgColor;
		this.currentBorderColor = this.borderColor instanceof Array ? this.borderColor[0] : this.borderColor;
		this.currentColor = this.color instanceof Array ? this.color[0] : this.color;

		this.setStyles(!this.disabled ? this.selectState.default : this.selectState.disabled);
		if (!this.options) {
			this.options = [];
		} else {
			if (this.options.length >= this.selectedValue && !this.multiple) {
				this.selectItem(this.selectedValue);
			}
		}
	}
}
