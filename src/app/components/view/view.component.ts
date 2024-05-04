import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChartsComponent } from '../../shared/components/charts/charts.component';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatDatepickerModule, CommonModule, ChartsComponent],
  providers: [provideNativeDateAdapter()],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

calendar: boolean = false;

openDatepicker() {
    this.calendar = !this.calendar;

}
}
