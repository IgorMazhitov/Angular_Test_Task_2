import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISelect } from '../data/data';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  constructor() { 
    this.element = {
      name: '',
      label: ''
    }
  }

  label: string = ''
  required: boolean = false
  description: string = ''
  choices: string[] = []
  currentValue: string = ''
  type: string = ''

  ngOnInit(): void {
    this.label = this.element.name
    this.required = this.element.required!
    this.description = this.element.description!
    this.choices = this.element.choices!
    this.currentValue = this.choices[0]
    this.type = this.element.label
  }


  @Input() element: ISelect
  @Output() newInputSelect = new EventEmitter<Array<any>>()
  
  changeCurrentValue = (value: string) => {
    this.currentValue = value
    this.newInputSelect.emit([this.currentValue, this.type])

  }

  clickHandler = (event: any) => {
    const btn = event.target.classList
    btn.toggle('img_down')
    const container = document.getElementsByClassName(this.label)[0]
    container.classList.toggle('customWrapper__hide')
  }

}
