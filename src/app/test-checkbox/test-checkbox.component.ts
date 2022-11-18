import { Component, OnInit, Input } from '@angular/core';
import { ICheckbox } from '../data/data';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {

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
  type: string = ''

  ngOnInit(): void {
    this.label = this.element.name
    this.type = this.element.label 
    this.required = this.element.required!
    this.description = this.element.description!
    this.choices = this.element.choices!
  }

  

  @Input() element: ICheckbox

  changeHandler = (event: any) => {
    const box = event.target
    const container = document.getElementById('boxes' + this.label)!.children
    if (box.id === 'Выделить все') {
        for (let i = 0; i < container.length; i++) {
          const checkedStatus = container[i]!.lastElementChild! as HTMLInputElement
          box.checked 
          ? checkedStatus.checked = true
          : checkedStatus.checked = false
      } 
    } else {
      box.getAttribute('checked') 
        ? box.removeAttribute('checked') 
        : box.setAttribute('checked', '')
    }
  }

}
