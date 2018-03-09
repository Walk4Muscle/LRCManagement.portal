import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'metric-grid',
  templateUrl: './metric-grid.component.html',
  styleUrls: ['./metric-grid.component.scss']
})
export class MetricGridComponent implements OnInit {
  @Input() user: Object[];

  constructor() { }

  ngOnInit() {
  }

}
