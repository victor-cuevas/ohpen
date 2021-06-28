import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles = ['administrator', 'rrhh'];
  model = {
    name: '',
    role: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authService.checkAuth(this.model)) {
      this.authService.login(this.model);
      this.router.navigate([`/`]);
    } else {
      alert('user not found');
    }
  }
}
