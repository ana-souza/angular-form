/*import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'beauty-profile-form',
  templateUrl: './app.component.html',
})
export class AppComponent {
  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: {
            label: 'First name',
            required: true,
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Destination',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            required: true,
          },
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


import { Component, Input, Inject } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
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
  
  //arrayForm: Array<string>;
  arrayForm: Array<any>;

  
  public constructor(appService: AppService, formBuilder: FormBuilder) {
    appService = appService;
    this.questions = appService.getQuestions()
    /*.subscribe(
      questions => this.questions = questions,
      error => alert('Erro')
    );
    console.log(this.questions);*/


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
  
    let indexx : string = index.toString();
    let position: number = opt.order;

    //let posicao : string = 

    /*if (e.target.checked) {
      this.arrayForm.push(e.target.value);
    } else {
      delete this.arrayForm[index];
    }*/

    if (e.target.checked) {
      //this.reactiveForm.get(indexx).value.push("teste");
      this.reactiveForm.get(indexx).value[position] = opt.name;
    }

    else {
      this.reactiveForm.get(indexx).value[position] = false;
    }

  }
}

