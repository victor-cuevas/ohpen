import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User.model';
import {Role} from '../../models/Role.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loggedUser: User = this.authService.getAuth();
  roleEnum = Role;

  constructor(private authService: AuthService, private router: Router) {}

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
