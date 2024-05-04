import { createFeatureSelector } from "@ngrx/store";
import { ChartInterface } from "../../../types/chart.interface";

export const selectCharts = createFeatureSelector<ReadonlyArray<ChartInterface>>('charts');