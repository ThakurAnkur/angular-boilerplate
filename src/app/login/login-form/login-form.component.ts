import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from './User.entity';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  // loginform = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })
  registerForm = this.formBuilder.group<User>(new User('', ''))
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  async onSubmit (ev: Event) {
    const user = this.registerForm.value as User;
    const data = await this.registerService.doRegister(user);
    data.subscribe((data)=>{
      console.log(data);
    })
  }
}
