import { Component, OnInit, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'note-list',
    styleUrls: ['./shared.component.scss'],
    template: `
    <mat-expansion-panel class="note-history-panel" expanded="true">
      <mat-expansion-panel-header [expandedHeight]="'48px'">
        <mat-panel-title>
          Note History
        </mat-panel-title>
      </mat-expansion-panel-header>
      <mat-list class="note-history">
        <mat-list-item class="sme">
          <h3 matLine>
            <span class="user">[WenXiang]</span>
            <i class="time">at 2018-02-15 15:00:00</i>
          </h3>
          <p matLine class="comment">
            This is a comment.
          </p>
        </mat-list-item>
        <mat-list-item class="se right-align">
          <h3 matLine>
            <span class="user">[YeJiang]</span>
            <i class="time">at 2018-02-15 16:00:00</i>
          </h3>
          <p matLine class="comment">
            Will do ASAP.
          </p>
          <p matLine>
            <span class="estimate">Estimated Close Date: 2018-02-20</span>
          </p>
        </mat-list-item>
        <mat-list-item class="sme">
          <h3 matLine>
            <span class="user">[WenXiang]</span>
            <i class="time">at 2018-02-15 17:00:00</i>
          </h3>
          <p matLine class="comment">
            Sounds Good.
          </p>
        </mat-list-item>
      </mat-list>
      <mat-action-row>
        <a mat-icon-button color="primary">
          <mat-icon>reply</mat-icon>
        </a>
      </mat-action-row>
    </mat-expansion-panel>`
})

// tslint:disable-next-line:component-class-suffix
export class NodeList implements OnInit {
    @Input() data: Object[];

    constructor() { }

    ngOnInit() { }
}
