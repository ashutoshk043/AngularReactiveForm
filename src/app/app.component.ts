import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserNameValidator } from './shared/custom.validator';
import { forbiddenNameValidator } from './shared/custom.validator';
import { passwordValidator } from './shared/pass.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';
  // userForm = new FormGroup({
  //   fullName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   address: new FormGroup({
  //     country: new FormControl(''),
  //     district: new FormControl(''),
  //     village: new FormControl(''),
  //   })
  // })
  constructor(private _fb: FormBuilder){}

  userForm = this._fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/), forbiddenNameValidator(/admin/) ]],
      email: [''],
      password: [],
      confirmPassword: [],
      address: this._fb.group({
        country: [''],
        district: [''],
        village: [''],
      })
  }, {Validator: passwordValidator})

  get fullName(){
   return this.userForm.get('fullName')
  }


  // getData() {
  //   this.userForm.setValue({
  //     fullName: "Ashutosh Kumar",
  //     email: "ashutoshk043@gmail.com",
  //     password: "12345",
  //     address: {
  //       country: "India",
  //       district: "MaharajGanj",
  //       village: "Runuwa",
  //     }
  //   })
  // }

  getData() {
    this.userForm.patchValue({
      fullName: "Ashutosh Kumar",
      email: "ashutoshk043@gmail.com",
      address: {
        country: "India",
        district: "MaharajGanj",
        village: "Runuwa",
      }
    })
  }
}
