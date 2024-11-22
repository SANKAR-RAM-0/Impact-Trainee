import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb:FormBuilder) {}

  loginForm=this.fb.group({
    email:[,[Validators.required]],
    password:[,[Validators.required]],
  })

  ngOnInit() {
  }

}
