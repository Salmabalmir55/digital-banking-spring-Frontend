import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const roles = this.authService.getProfile()?.roles;
    if (roles && roles.includes('ADMIN')) {
      return true;
    }
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
