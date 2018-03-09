import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['case_number', 'title', 'PES_product_family_name', 'owner',
    'SR_wait_state', 'SR_type', 'status', 'update_sme'
  ];
  dataSource = new MatTableDataSource<Case>(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
    console.log('oninit in dashboard');
  }
}

export interface Case {
  case_number: string;
  title: string;
  PES_product_family_name: string;
  owner: string;
  SR_wait_state: string;
  SR_type: string;
  status: string;
  update_sme?: Date;
}

const ELEMENT_DATA: Case[] = [
  {
    case_number: '117051515737349',
    title: 'IE11 crash',
    PES_product_family_name: 'Internet Explorer',
    owner: 'YEJXU',
    SR_wait_state: 'Pending Development',
    SR_type: 'Incident',
    status: 'Not set',
    update_sme: null
  }
];
