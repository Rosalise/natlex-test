import { createFeature, createReducer, on } from '@ngrx/store';
import { ChartsActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { ChartInterface } from '../../../types/chart.interface';

export const initialState: ReadonlyArray<ChartInterface> = [];

export const chartsReducer = createReducer(
  initialState,
  on(ChartsActions.addChart, (state, { chartOptions }) => [
    ...state,
    chartOptions,
  ]),
  on(ChartsActions.deleteChart, (state, { index }) =>
    state.filter((c, idx) => idx != index)
  ),
  on(ChartsActions.editChart, (state, { chartOptions }) =>
    state.map((value) => {
      if (value.id === chartOptions.id) {
        const newValue = {
          id: value.id,
          data: value.data,
          type: chartOptions.type,
          title: chartOptions.title,
          color: chartOptions.color,
        };
        return newValue;
      } else {
        return value;
      }
    })
  )
);
