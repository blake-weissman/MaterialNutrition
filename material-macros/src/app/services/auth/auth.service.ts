import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  async signOut(): Promise<void> {
    await this.angularFireAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
