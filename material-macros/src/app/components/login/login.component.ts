import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public angularFireAuth: AngularFireAuth) {
    // angularFireAuth.
  }

  ngOnInit() {
  }

  public test(val) {
    console.log(val);
  }
}
