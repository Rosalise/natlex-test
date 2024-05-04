import { Component, Input } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';
import { ChartService } from '../../services/chart.service';
import { Store } from '@ngrx/store';
import { ChartsActions } from './store/actions';
import { selectCharts } from './store/selector';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ChartInterface } from '../../types/chart.interface';
import { ChartDialogData } from '../../types/chartDialogData.interface';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  standalone: true,
  imports: [
    HighchartsChartModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    DialogComponent,
  ],
})
export class ChartsComponent {
  chartConstructor: string = 'chart';
  Highcharts: typeof Highcharts = Highcharts;

  chartInterfaceArray$ = this.store.select(selectCharts);

  chartOptionsArray: Highcharts.Options[] = [];
  localChartInterfaceArray: readonly ChartInterface[] = [];

  constructor(
    private store: Store,
    private chartService: ChartService,
    public router: Router,
    public dialog: MatDialog
  ) {
    this.chartInterfaceArray$.subscribe((values) => this.updateCharts(values));
  }

  updateCharts(chartParams: readonly ChartInterface[]) {
    this.chartOptionsArray = chartParams.map((param) => {
      const newChartObject = this.chartService.createNewChart(
        param.type,
        param.title,
        param.color,
        param.data
      );
      return newChartObject;
    });

    this.localChartInterfaceArray = chartParams;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
  }

  editChart(chartIndex: number) {
    const chartData = this.localChartInterfaceArray[chartIndex];

    let chartDialogData: ChartDialogData = {
      chartTitle: chartData.title,
      chartColor: chartData.color,
      chartType: chartData.type,
      chartId: chartData.id,
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      data: chartDialogData,
    });
  }

  deleteChart(chartIndex: number) {
    console.log('delete!');
    this.store.dispatch(ChartsActions.deleteChart({ index: chartIndex }));
    // console.log(chartData)
  }
}
