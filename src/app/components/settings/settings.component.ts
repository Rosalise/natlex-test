import { Component } from "@angular/core";
import { ChartsComponent } from "../../shared/components/charts/charts.component";


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})

export class SettingsComponent {

}
