import { Component, Input } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';
import { ChartService } from '../../services/chart.service';
import { Store } from '@ngrx/store';
import { ChartsActions } from './store/actions';
import { selectCharts } from './store/selector';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
})

export class ChartsComponent {
  chartConstructor: string = 'chart';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptionsArray$ = this.store.select(selectCharts);

  constructor(private store : Store, private chartService : ChartService) {
  }

  addNewChart() {
    let newChartData = this.chartService.createNewChart();
    this.store.dispatch(ChartsActions.addChart({chartOptions: newChartData}));
  }



}
