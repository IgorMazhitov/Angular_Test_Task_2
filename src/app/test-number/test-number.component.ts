import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INumber } from '../data/data';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit {

  constructor() { 
    this.element = {
      name: '',
      label: '',
      required: false,
      description: ''
    }
  }

  label: string = ''
  required: boolean = false
  description: string = ''
  valueNumber: number = 0
  type: string = ''

  ngOnInit(): void {
    this.label = this.element.name
    this.required = this.element.required!
    this.description = this.element.description!
    this.type = this.element.label
  }

  onClickIncr = () => {
    this.valueNumber += 1
    this.newInputNumber.emit([this.valueNumber, this.type])
  }

  onClickDecr = () => {
    this.valueNumber -= 1
    this.newInputNumber.emit([this.valueNumber, this.type])
  }

  @Input() element: INumber

  @Output() newInputNumber = new EventEmitter<Array<any>>()

  changeHandler = (event: any) => {
    this.valueNumber = parseInt(event.target.value)
    this.newInputNumber.emit([this.valueNumber, this.type])
  }

}
