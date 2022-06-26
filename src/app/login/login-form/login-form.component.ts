import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../../entity/User.entity';
import { LoginService } from '../login.service';

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
  loginForm = this.formBuilder.group<User>(new User('', ''))
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  async onSubmit (ev: Event) {
    const user = this.loginForm.value as User;
    const data = await this.loginService.doLogin(user);
    data.subscribe((data)=>{
      console.log(data);
    })
  }

  async currentUser(ev: Event) {
    const data = await this.loginService.me()
    data.subscribe((data)=>{
      console.log(data);
    })
  }

}
