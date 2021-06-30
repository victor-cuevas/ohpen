import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Role } from '../models/Role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    {
      name: 'admin',
      role: Role.admin,
    },
    {
      name: 'victor',
      role: Role.rrhh
  }];

  constructor() {}

  checkAuth(auth: User): boolean {
    return !!this.users.filter(item => item.name === auth.name && auth.role === item.role).length;
  }

  isAuthorized(): boolean {
    const auth = this.getAuth();

    return !!auth && !!auth.name;
  }

  getAuth(): User {
    return JSON.parse(localStorage.getItem('auth'));
  }

  logout(): void {
    this.removeAuthFromLocalStorage();
  }

  login(auth: User): void {
    localStorage.setItem('auth', JSON.stringify(auth));
  }

  private removeAuthFromLocalStorage(): void {
    localStorage.removeItem('auth');
  }
}
