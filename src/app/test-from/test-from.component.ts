import { Component, OnInit } from '@angular/core';
import { generator, IInput, ITestForm } from '../data/data';

@Component({
  selector: 'app-test-from',
  templateUrl: './test-from.component.html',
  styleUrls: ['./test-from.component.scss']
})
export class TestFromComponent implements OnInit  {

    inputField = generator.input
    numberField = generator.number
    selectField = generator.select
    checkboxField = generator.checkbox
    requiredArray: Array<any> = []
    submitButtonActive: any = ''

    testForm: ITestForm = {
      name: '',
      age: 0,
      martial: 'Не важно',
      university: [],
      placeBorn: 'Не важно',
      skills: []
    }

    constructor() { }

    ngOnInit(): void {
      function checkForRequired(object: any, array: any) {
        for (let [key, val] of Object.entries(object)) {
          if (key === 'required') {
            object.required === true ? array.push(object.label) : null
          }
          if (typeof val === 'object') {
            checkForRequired(val, array)
          }
        }
      }
      checkForRequired(generator, this.requiredArray)
    }

    removeHandler = (value: any) => {
      const element = value[0].value
      const type = value[1]
      for (let i = 0; i < this.testForm[type].length; i++) {
        if (element === this.testForm[type][i]) {
          let del = this.testForm[type].splice(i, 1)
        }
      }
    }

    newInput = (value:  Array<any>) => {
      for (let [key, val] of Object.entries(this.testForm)) {
        if (key === value[1]) {
          if (typeof val === 'object') {
            this.testForm[value[1]].push(value[0])
          } else {
            this.testForm[value[1]] = value[0]
          }
        }
        for (let i = 0; i < this.requiredArray.length; i++) {
          if (value[1] === this.requiredArray[i]) {
            this.requiredArray[i] = true
          }
        }
      }
      this.submitButtonActive = document.getElementById('submitBtn') as HTMLButtonElement
      if (this.requiredArray.filter(el => el === true).length !== this.requiredArray.length) {
        this.submitButtonActive.disabled = true
      } else {
        this.submitButtonActive.disabled = false
      }

    }

    submitForm = (event: any) => {
      const checkBoxParent = document.getElementsByClassName('checkBoxWrapper')[0].children
      for (let i = 0; i < checkBoxParent.length; i++) {
        const element = checkBoxParent[i].lastChild as HTMLInputElement
        if (element.checked) {
          const elementText = checkBoxParent[i].firstChild as HTMLElement
          this.testForm.skills?.push(elementText.innerHTML)
        }
      }
      console.log(this.testForm)

    }

}
