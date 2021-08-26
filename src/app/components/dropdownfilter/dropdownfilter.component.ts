import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterApply } from './../../filterapplication';

@Component({
  selector: 'app-dropdownfilter',
  templateUrl: './dropdownfilter.component.html',
  styleUrls: ['./dropdownfilter.component.scss']
})
export class DropdownfilterComponent implements OnInit {

  constructor() { }

  @Input('filter_values') arr : any;
  @Input('attri') attribute : any;
  @Output() messageEvent = new EventEmitter<any>();
  isChecked : boolean

  captureValues(event){
    this.isChecked = !this.isChecked
    this.messageEvent.emit(event)
  }

  ngOnInit(): void {
  }

}
