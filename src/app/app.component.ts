import { Component, Input, Inject } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {AppService} from './app.service';

export interface Options {
  id: number;
  name: string;
  imageUrl: string;
  order: number;
  singleOption: boolean;
  checked: boolean;
}

export interface Questions {
  id: number;
  name: string;
  question: string;
  order: number;
  type: number;
  hasError: boolean;
  errorMessage?: string;
  options: Array<Options>;
}

@Component({
  selector: 'beauty-profile-form',
  templateUrl: './app.component.html',
  providers: [AppService]
})
export class AppComponent {

  reactiveForm: FormArray;
  activedStep = 0;
  questions: Array<Questions>;
  arrayForm: Array<any>;

  
  public constructor(appService: AppService, formBuilder: FormBuilder) {
    appService = appService;
    this.questions = appService.getQuestions()

    this.reactiveForm = new FormArray(this.questions.map( (question) => {
      
      if (question.type === 1){
        for (let i = 0; i<question.options.length; i++) {
          if (question.options[i].checked)
            return  new FormControl(question.options[i].name)
        }
      }

      if (question.type === 2) {
        this.arrayForm = [];

        for (let i = 0; i<question.options.length; i++) {
          if (question.options[i].checked)
            this.arrayForm[question.options[i].order] = question.options[i].name;
          else this.arrayForm[question.options[i].order] = false;
        }
          return new FormControl(this.arrayForm)
      }

      return null;
    }));
  } 



  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.reactiveForm.value));
  }

  onCheckboxChange(e, index: number, opt: Options) {
  
    let i : string = index.toString();
    let position: number = opt.order;

    if (e.target.checked) {
      this.reactiveForm.get(i).value[position] = opt.name;
    }

    else {
      this.reactiveForm.get(i).value[position] = false;
    }

  }
}

