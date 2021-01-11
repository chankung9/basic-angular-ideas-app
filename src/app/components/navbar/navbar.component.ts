import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { AppState } from '@app/store';
import { SetCurrentUser } from '@app/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  token: string | null | undefined;
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
        , icon: 'fa fa-home'
      },
      {
        label: 'Users',
        routerLink: ['/users']
      },
      {
        label: 'Ideas',
        routerLink: ['/ideas']
      }
    ];
    this.token = this.authService.token;
  }

  handleClick() {
    if (this.authService.token) {
      this.authService.token = null;
      this.store.dispatch(SetCurrentUser({ user: null }));
    }
    this.router.navigate(['/auth']);
  }
}
