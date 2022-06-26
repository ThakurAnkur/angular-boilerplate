import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../apiUrl';
import { User } from '../../entity/User.entity';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) {

  }
  async doRegister(user: User) {
    return this.httpClient.post(API_URL + 'user', user);
  }
}
