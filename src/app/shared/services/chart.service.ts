import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDialogData } from '../types/chartDialogData.interface';
import { ChartInterface } from '../types/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  chartOptionsArray: Highcharts.Options[] = [];
  counter = 0;
  currentCount = 0;

  constructor(private router: Router) {}
  generateRandomDOB(): number {
    const randomDate = this.getRandomDate(
      new Date('2023-01-01T01:57:45.271Z'),
      new Date('2024-05-05T01:57:45.271Z')
    );
    return randomDate.getTime();
  }

  getRandomDate(from: Date, to: Date): Date {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
  }

  getRandomData(N: number): number[][] {
    let res: number[][] = [];

    while (res.length < N) {
      const randomDate = this.generateRandomDOB();
      const randomValue = Math.floor(Math.random() * 100);

      res.push([randomDate, randomValue]);
    }

    res.sort(function (a, b) {
      return b[0] - a[0];
    });

    return res;
  }

  createNewChart(
    chartType: string,
    chartTitle: string,
    chartColor: string,
    data: number[][] | null
  ): Highcharts.Options {
    const chartData = data === null ? this.getRandomData(20) : data;

    let chartOptions: Highcharts.Options = {
      // chart: {
      //   type: chartType,
      // },
      title: {
        text: chartTitle,
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: 'Value',
        },
      },
      series: [
        {
          data: chartData,
          type: chartType as 'line' | 'bar' | 'spline' | 'area',
          color: chartColor,
        },
      ],
    };

    this.counter += 1;

    return chartOptions;
  }

  increaseTotalNumber() { this.currentCount += 1; }
      reduceTotalNumber() { this.currentCount -= 1;}
}