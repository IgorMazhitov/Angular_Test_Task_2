import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-custom-drop-down',
  templateUrl: './select-custom-drop-down.component.html',
  styleUrls: ['./select-custom-drop-down.component.scss']
})
export class SelectCustomDropDownComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  @Input() choices: any
  @Input() label: any

  @Output() changeCurrentValue = new EventEmitter<string>()

  

  selector = (event: any) => {
    const arrayOfElements = document.getElementById('custom' + this.label)!.children
    for (let i = 0; i < arrayOfElements.length; i++) {
      arrayOfElements[i].classList.contains('active') ? arrayOfElements[i].classList.toggle('active') : null
    }
    const element = event.target.classList
    element.toggle('active')
    this.changeCurrentValue.emit(event.target.innerHTML)
    const btn = document.getElementById(this.label + 'img')!
    btn.classList.toggle('img_down')
    const container = document.getElementsByClassName(this.label)[0]
    container.classList.toggle('customWrapper__hide')
  }

}
