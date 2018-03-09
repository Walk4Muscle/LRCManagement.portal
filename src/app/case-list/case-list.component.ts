import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Case } from '../models/Case.model';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {

  dataSource = new MatTableDataSource<Case>(ELEMENT_DATA);
  displayedColumns = ['case_number', 'title', 'category', 'owner',
    'SR_wait_state', 'SR_type', 'status', 'operation'
  ];
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor() { }

  ngOnInit() {
  }

}


const ELEMENT_DATA: Case[] = [
  {
    case_number: '117051515737349',
    title: 'IE11 crash',
    category: 'Internet Explorer',
    owner: 'YEJXU',
    SR_wait_state: 'Pending Development',
    SR_type: 'Incident',
    status: 'Not set',
    update_sme: null
  }
]