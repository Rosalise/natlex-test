import { createFeatureSelector } from "@ngrx/store";

export const selectCharts = createFeatureSelector<ReadonlyArray<Highcharts.Options>>('charts');