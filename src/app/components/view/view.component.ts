import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartsComponent } from '../../shared/components/charts/charts.component';
import Highcharts from 'highcharts';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    CommonModule,
    ChartsComponent, FormsModule, ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  calendar: boolean = false;
  week: string = 'week';
  month: string = 'month';
  year: string = 'year';
  datepicker: string = 'datepicker';

  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  })


  openDatepicker() {
    this.calendar = !this.calendar;
  }

  setDateRange(range: string) {
    let maxDate: number | null = null;
    let minDate: number | null = null;

    switch (range) {
      case 'week':
        minDate = Date.now() - 7 * 1000 * 60 * 60 * 24;
        maxDate = Date.now();
        break;
      case 'month':
        minDate = Date.now() - 30 * 1000 * 60 * 60 * 24;
        maxDate = Date.now();
        break;
      case 'year':
        minDate = Date.now() - 365 * 1000 * 60 * 60 * 24;
        maxDate = Date.now();
        break;
      case 'datepicker':
        if(this.dateRange.value.start !== null && this.dateRange.value.start !== undefined) {
          minDate = this.dateRange.value.start.getTime()
        }

        if(this.dateRange.value.end !== null && this.dateRange.value.end !== undefined) {
          maxDate = this.dateRange.value.end.getTime()
        }
      
    }
  
    Highcharts.charts.forEach((chart) => {
      if (chart !== undefined) {
        chart?.xAxis[0].update({
          min: minDate,
          max: maxDate,
        });
      }
    });
  }
}
