import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  //form
  fStudentData: FormGroup;

  //Validation
  FirstName = ['', [Validators.required, Validators.minLength(5)]];
  LastName = ['', [Validators.required, Validators.minLength(5)]];
  Email = ['', [Validators.required, Validators.email]];

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.fStudentData = this.formBuilder.group({

      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email

    });


  }

  onAddStudent(studentData: any) {

    console.log(studentData.value);
  }


}