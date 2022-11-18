import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInput } from '../data/data';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

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
  placeholder: string = ''
  type: string = ''
  firstUniError: boolean = false
  universitiesAmount: any = []
  i: number = 1

  ngOnInit(): void {
    this.label = this.element.name
    this.required = this.element.required!
    this.description = this.element.description!
    this.placeholder = this.element.placeholder!
    this.type = this.element.label
  }
  
  @Input() element: IInput

  // OUTPUTS FOR PARENT ELEMENT (MAIN FORM)
  @Output() newInputText = new EventEmitter<string[]>()
  @Output() removeUni = new EventEmitter<any>()

  //FIELD VALIDATION 
  //ALL TEXT INPUTS ARE VALIDATING LIKE THIS: LENGTH >= 4 AND NO DIGITS ONLY ALPHABET

  changeHandler = (event: any) => {
    const text = event.target.value
    const uniNumber = event.target.id
    // VALIDATION
    if (text.match(/[^a-zA-Zа-яА-Я]/g) || text.length < 4 || (text.match(/[^a-zA-Zа-яА-Я]/g) && text.length < 4)) {
      //IS IT UNIVERSITY FIELD OR NOT
      if (uniNumber.match(/[^0-9]/g)) {
        this.firstUniError = true
      } else {
        this.universitiesAmount[uniNumber][1] = true
      }
    } else {
      //IS IT UNIVERSITY FIELD OR NOT
      if (uniNumber.match(/[^0-9]/g)) {
        this.firstUniError = false
        this.newInputText.emit([event.target.value, this.type])
      } else {
        this.newInputText.emit([event.target.value, this.type])
        this.universitiesAmount[uniNumber][1] = false
      }
    }
  }

  //ADD NEW INPUT FOR A UNIVERSITY (OR ANYTHING ELSE AS YOU WISH)
  clickHandler = (event: any) => {
    this.i += 1
    this.universitiesAmount.push(['uni' + this.i, false])
  }

  deleteUni = (event: any, i: number) => {
    const value = document.getElementById(`${i}`)
    this.removeUni.emit([value, this.type])
    const del = this.universitiesAmount.splice(i, 1)
  }
}
