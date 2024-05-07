import { Component, Inject, Input } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { CommonModule } from '@angular/common';
import { ChartService } from '../../services/chart.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ChartDialogData } from '../../types/chartDialogData.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChartsActions } from '../charts/store/actions';
import { ChartInterface } from '../../types/chart.interface';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ],
})
export class DialogComponent {
  form = this.fb.nonNullable.group({
    chartId: this.data === null ? -1 : this.data.chartId,
    chartTitle: this.data === null ? 'New chart' : this.data.chartTitle,
    chartColor: this.data === null ? 'red' : this.data.chartColor,
    chartType: this.data === null ? 'line' : this.data.chartType,
  });

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChartDialogData,
    private fb: FormBuilder,
    private store: Store,
    private chartService: ChartService
  ) {}

  saveChart() {
    this.dialogRef.afterClosed().subscribe((result) => {
      let formValue = this.form.getRawValue();

      if (formValue.chartId == -1) {
        const randomData = this.chartService.getRandomData(20);
        this.chartService.increaseTotalNumber();

        this.store.dispatch(
          ChartsActions.addChart({
            chartOptions: {
              id: this.chartService.counter,
              data: randomData,
              title: formValue.chartTitle,
              type: formValue.chartType,
              color: formValue.chartColor,
            },
          })
        );
      } else {
        const chartData: ChartInterface = {
          id: formValue.chartId,
          title: formValue.chartTitle,
          type: formValue.chartType,
          color: formValue.chartColor,
          data: null,
        };
        this.store.dispatch(
          ChartsActions.editChart({ chartOptions: chartData })
        );
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
