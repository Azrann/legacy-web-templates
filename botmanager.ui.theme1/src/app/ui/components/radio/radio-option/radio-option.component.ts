import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
  forwardRef,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { state } from '../../../interfaces/general';

@Component({
  selector: 'tc-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TCRadioOptionComponent),
      multi: true
    }
  ]
})
export class TCRadioOptionComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  @HostBinding('class.tc-radio-option') true;
  @HostBinding('class.disabled') @Input() disabled: boolean;
  @HostBinding('class.checked') @Input() checked: boolean;
  @Input() name: string;
  @Input() label: string;
  @Input('value') _value: string;
  @ViewChild('radioLabel') radioLabel;
  @Input() bgColor: string | string[];
  @Input() borderColor: string | string[];
  @Input() color: string | string[];
  @Input() labelColor: string | string[];
  currentBgColor: string;
  currentBorderColor: string;
  currentColor: string;
  currentLabelColor: string;
  states: any;

  onChange: (value: any) => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
		if (this.onChange) {
			this._value = val;
			this.onChange(val);
			this.onTouched();
		}
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {
    this.label = '';
    this.name = '';
    this.checked = false;
    this.disabled = false;
    this.states = state;
  }

  ngOnInit() {
    this.setStyles(this.disabled ? this.states.disabled : (this.checked ?  this.states.focus : this.states.default));
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  writeValue(value): void {
		this.renderer.setProperty(this.elementRef, 'checked', value === this.elementRef.nativeElement.value);
  }

  registerOnChange(fn) {
		this.onChange = fn;
  }

  registerOnTouched() { }

  switch(v) {
    if (!this.disabled && !this.checked) {
      this.checked = true;
      this.value = v;

      this.setStyles(this.states['focus']);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.disabled) {
      this.setStyles(this.states[this.checked ? 'focus' : 'hover']);
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (!this.disabled) {
      this.setStyles(this.states[this.checked ? 'focus' : 'default']);
    }
  }

  setStyles(
    st: state,
    bg: string | string[] = this.bgColor,
    border: string | string[] = this.borderColor,
    color: string | string[] = this.color,
    labelColor : string | string[] = this.labelColor
  ) {
    let styleIndex: number = 0;

    switch (st) {
      case this.states.hover:
        styleIndex = 1;
        break;
      case this.states.focus:
        styleIndex = 2;
        break;
      case this.states.disabled:
        styleIndex = 3;
        break;
      default:
        styleIndex = 0;
    }

    this.currentBgColor = bg instanceof Array ? bg[styleIndex] : bg;
    this.currentBorderColor = border instanceof Array ? border[styleIndex] : border;
    this.currentColor = color instanceof Array ? color[styleIndex] : color;
    this.currentLabelColor = labelColor instanceof Array ? labelColor[styleIndex] : labelColor;
  }

  getStyles() {
    return {
      'background-color': this.currentBgColor,
      'border-color': this.currentBorderColor
    }
  }
  getMarkerColor() {
    return {
      'background-color': this.currentColor
    }
  }
  getLabelColor() {
    return {
      'color': this.currentLabelColor
    }
  }
}
