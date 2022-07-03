import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from '../custom.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
 reactiveFormex:any;
  

  constructor() {

    }

  ngOnInit(): void {
    this.reactiveFormex = new FormGroup( {
     'projectName':new FormControl(null,Validators.required),
      'mail':new FormControl(null,Validators.required),
      'projectStatus': new FormControl('critical')
    });
   
    }
    onSubmit(){
     console.log(this.reactiveFormex.value)
    }

  }