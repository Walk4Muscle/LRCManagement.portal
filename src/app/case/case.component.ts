import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  constructor(private _location: Location) {
  }
  backClicked() {
    this._location.back();
  }

  ngOnInit() {
  }

}
