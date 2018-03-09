import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AdalService } from 'ng2-adal/dist/core';
import { SecretService } from './services/secret.service';
import { LoggedInGuard } from './services/logged-in.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatTableModule,
  MatTabsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
} from '@angular/material';

import {
  NodeList,
  VolumeTrendChart,
  MetricTile
} from './shared';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ChartModule } from 'angular2-chartjs';
// demo
// import { MockupChartsModule } from './mockup-charts/mockup-charts.module';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ReportComponent } from './report/report.component';
import { CaseComponent } from './case/case.component';
import { CaseListComponent } from './case-list/case-list.component';
import { NeedAuthComponent } from './need-auth/need-auth.component';
import { MetricGridComponent } from './metric-grid/metric-grid.component';
import { Globals } from './services/app.globals';
import { ChartDataService } from './services/chartdata.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { MetricTableDataService } from './services/metrictabledata.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // ReportComponent,
    CaseComponent,
    CaseListComponent,
    NodeList,
    VolumeTrendChart,
    MetricTile,
    NeedAuthComponent,
    MetricGridComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    ChartModule,
    //MockupChartsModule, // demo
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  providers: [AdalService, SecretService, AuthService, LoggedInGuard, ChartDataService, MetricTableDataService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
