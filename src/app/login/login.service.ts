import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../apiUrl';
import { User } from '../../entity/User.entity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {

  }

  doLogin(user: User) {
    return this.httpClient.post(API_URL + 'login', user);
  }
}
