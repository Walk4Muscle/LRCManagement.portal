import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ReportComponent } from './report/report.component';
import { CaseComponent } from './case/case.component';
import { CaseListComponent } from './case-list/case-list.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { NeedAuthComponent } from './need-auth/need-auth.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard] },
    // { path: 'report', component: ReportComponent },
    { path: 'case', component: CaseListComponent },
    { path: 'case/:id', component: CaseComponent },
    { path: 'needAuth', component: NeedAuthComponent }
];
