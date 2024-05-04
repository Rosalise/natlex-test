import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ChartService {

    chartOptionsArray: Highcharts.Options[] = [];

    generateRandomDOB() : number {
        const randomDate = this.getRandomDate(new Date('2023-01-01T01:57:45.271Z'), new Date('2024-01-05T01:57:45.271Z'));
        return randomDate.getTime()
    }
    
    getRandomDate(from: Date, to: Date) : Date{
        const fromTime = from.getTime();
        const toTime = to.getTime();
        return new Date(fromTime + Math.random() * (toTime - fromTime));
    }
    
    getRandomData(N : number) : number[][] {
        let res : number[][] = [];
    
        while(res.length < N) {
            const randomDate = this.generateRandomDOB();
            const randomValue =  Math.floor(Math.random() * 100);
    
            res.push([randomDate, randomValue]);
        }
    
        res.sort(function(a,b) {return b[0] - a[0];});
    
        return res;
    }

    createNewChart() : Highcharts.Options {
        let chartData = this.getRandomData(20);
    
        let chartOptions: Highcharts.Options = {
          chart: {
            type: 'line',
          },
          title: {
            text: 'My Chart',
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
              type: 'line',
            },
          ],
        };
        
        return chartOptions
        //this.chartOptionsArray.push(chartOptions);
      }

}