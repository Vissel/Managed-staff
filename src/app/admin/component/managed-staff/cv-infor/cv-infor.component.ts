import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
@Component({
  selector: 'app-cv-infor',
  templateUrl: './cv-infor.component.html',
  styleUrls: ['./cv-infor.component.scss']
})
export class CvInforComponent implements OnInit {

	form: FormGroup;

  constructor(private fb : FormBuilder) { 
  	this.form = fb.group({
  		name: [''],
  		pass: ['']
  	})
  }

  ngOnInit() {
  }

  onClick(){
  	console.log(this.form.get.name)
  }

}
