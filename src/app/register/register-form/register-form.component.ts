import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../../../entity/User.entity';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
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
