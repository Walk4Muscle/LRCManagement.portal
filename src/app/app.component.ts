import { Component, OnInit } from '@angular/core';
import { SecretService } from './services/secret.service';
import { AdalService } from 'ng2-adal/dist/services/adal.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Globals } from './services/app.globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  APPNAME = 'LRCManagement';
  USER: adal.User;
  constructor(
    private adalService: AdalService,
    private secretService: SecretService,
    private route: ActivatedRoute,
    private globals: Globals,
  ) {
    this.adalService.init(this.secretService.adalConfig);
  }

  ngOnInit() {
    this.adalService.handleWindowCallback();
    this.adalService.getUser().subscribe(user => {
      this.globals.USER = user;
      this.globals.USER.alias = this.globals.USER.userName.split('@')[0];
    });
    window.location.hash = '';
    this.USER = this.globals.USER;
  }

  onDeactivate() {
    const contentContainer = document.querySelector('.mat-sidenav-content');
    contentContainer.scrollTo(0, 0);
  }

  public logIn() {
    this.adalService.login();
  }
}
