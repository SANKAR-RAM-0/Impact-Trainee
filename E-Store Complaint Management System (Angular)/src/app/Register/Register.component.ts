import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ConfirmedValidator } from '../confirm.validator';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) {}
  registerForm=this.fb.group({
    fname:["",[Validators.required,Validators.minLength(5)]],
    lname:["",[Validators.required,Validators.minLength(3)]],
    email:["",[Validators.required,Validators.email]],
    phoneno:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    password:["",[Validators.required,Validators.minLength(6)]],
    cpassword:["",[Validators.required]]
  },{validator:ConfirmedValidator('password','cpassword')})

  submitted=false;

  onSubmit() {
    this.submitted=true

    if(this.registerForm.invalid) {
      return
    }
    alert("Success")
  }

  ngOnInit() {
  }

}
