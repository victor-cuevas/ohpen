import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles = ['administrator', 'rrhh'];
  model: User = {
    name: '',
    role: null
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authService.checkAuth(this.model)) {
      this.authService.login(this.model);
      this.router.navigate([`/`]);
    } else {
      alert('User/role combination doesn\'t exist');
    }
  }
}
