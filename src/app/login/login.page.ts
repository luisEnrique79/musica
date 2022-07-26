import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    
    email: [
      {type: "require", message:" email es obligatorio"},
      {type: "pattern", message:" email NO es valido"}
    ],
    
    Password: [
      {type: "require", message:" password obligatorio"},
      {type: "minLength(6)", message:" password NO valido"}
    ]
  };
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$")
        ])
      ),
      Password: new FormControl(
        "",
        Validators.compose([         
          Validators.minLength(6),
            Validators.maxLength(15),
              Validators.required
        ])
      ),     
    })
  }

  ngOnInit() {
  }

}
