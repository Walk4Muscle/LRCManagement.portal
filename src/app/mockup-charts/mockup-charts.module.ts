import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';

import { VolumeTrendComponent } from './volume-trend';
import { VolumeTrendQueueComponent } from './volume-trend-queue';
import { VolumeTrendEngineerComponent } from './volume-trend-engineer';
import { VolumeDistributionComponent } from './volume-distribution';
import { VolumeDistributionEngComponent } from './volume-distribution-engineer';
import { VolumeDistributionQueueComponent } from './volume-distribution-queue';
import { RatioTrendComponent } from './ratio-trend';
import { RatioTrendQueueComponent } from './ratio-trend-queue';
import { RatioTrendEngineerComponent } from './ratio-trend-engineer';
import { LaborTrendComponent } from './labor-trend';
import { LaborTrendQueueComponent } from './labor-trend-queue';
import { LaborTrendEngineerComponent } from './labor-trend-engineer';
import { UTDistributionComponent } from './ut-distribution';


@NgModule({
  imports: [
    CommonModule,
    ChartModule,
  ],
  declarations: [
    VolumeTrendComponent,
    VolumeTrendQueueComponent,
    VolumeTrendEngineerComponent,
    VolumeDistributionComponent,
    VolumeDistributionEngComponent,
    VolumeDistributionQueueComponent,
    RatioTrendComponent,
    RatioTrendQueueComponent,
    RatioTrendEngineerComponent,
    LaborTrendComponent,
    LaborTrendQueueComponent,
    LaborTrendEngineerComponent,
    UTDistributionComponent,
  ],
  exports: [
    VolumeTrendComponent,
    VolumeTrendQueueComponent,
    VolumeTrendEngineerComponent,
    VolumeDistributionComponent,
    VolumeDistributionEngComponent,
    VolumeDistributionQueueComponent,
    RatioTrendComponent,
    RatioTrendQueueComponent,
    RatioTrendEngineerComponent,
    LaborTrendComponent,
    LaborTrendQueueComponent,
    LaborTrendEngineerComponent,
    UTDistributionComponent,
  ],
})
export class MockupChartsModule { }
