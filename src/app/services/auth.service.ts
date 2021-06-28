import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    {
      name: 'admin',
      user_group: 'administrator',
    },
    {
      name: 'victor',
      user_group: 'rrhh'
  }];

  constructor() {}

  checkAuth(auth): boolean {
    return !!this.users.filter(item => item.name === auth.name && auth.role === item.user_group).length;
  }

  isAuthorized(): boolean {
    const auth = this.getAuth();

    return !!auth;
  }

  getAuth(): any {
    return JSON.parse(localStorage.getItem('auth'));
  }

  logout(): void {
    this.removeAuthFromLocalStorage();
  }

  login(auth): void {
    localStorage.setItem('auth', JSON.stringify(auth));
  }

  private removeAuthFromLocalStorage(): void {
    localStorage.removeItem('auth');
  }
}
