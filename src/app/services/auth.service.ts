import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO, AuthType } from '@app/models/auth';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) { }

  private auth(authType: AuthType, data: AuthDTO) {
    return this.http.post(`${this.api}/${authType}`, data);
  }

  register(data: AuthDTO) {
    return this.auth('register', data);
  }

  login(data: AuthDTO) {
    return this.auth('login', data);
  }

  get token(): string | null {
    return localStorage.getItem('idea_token');
  }

  set token(val: string | null) {
    if (val) {
      localStorage.setItem('idea_token', val);
    } else {
      localStorage.clear();
    }
  }
}
