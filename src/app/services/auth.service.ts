import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthDTO, AuthType } from '@app/models/auth';
import { User } from '@app/models/user';
import { environment } from '@env/environment';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private api: string = environment.api_server + '/auth';

  constructor(private http: HttpClient) { }

  private auth(authType: AuthType, data: AuthDTO) {
    return this.http.post<User>(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        this.token = user.token;
        return of(user);
      })
    );
  }

  whoami() {
    return this.http.get<User>(`${this.api}/whoami`, {
      headers: { authorization: `Bearer ${this.token}` }
    });
  }

  register(data: AuthDTO) {
    return this.auth('register', data);
  }

  login(data: AuthDTO) {
    return this.auth('login', data);
  }

  get token(): string | null | undefined {
    return localStorage.getItem('idea_token');
  }

  set token(val: string | null | undefined) {
    if (val) {
      localStorage.setItem('idea_token', val);
    } else {
      localStorage.clear();
    }
  }

  canActivate() {
    if (this.token) {
      return true;
    }
    return false;
  }
}
