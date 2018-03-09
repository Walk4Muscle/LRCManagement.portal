import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'ng2-adal/dist/core';

@Component({
  templateUrl: './need-auth.component.html',
  styleUrls: ['./need-auth.component.css']
})
export class NeedAuthComponent implements OnInit {

  constructor(private router: Router,
    private adalService: AdalService) {
    console.log(1111111)
  }

  ngOnInit() {
    console.log('init in need auth');
    if (this.adalService.userInfo.isAuthenticated) {
      this.router.navigate(['dashboard']);
    } else {
      this.adalService.login();
    }
  }

  public logIn() {
    this.adalService.login();
  }
}
