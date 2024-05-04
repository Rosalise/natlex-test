import {createFeature, createReducer, on} from '@ngrx/store'
//import {FeedStateInterface} from '../types/feedState.interface'
import {ChartsActions} from './actions'
import {routerNavigationAction} from '@ngrx/router-store'

export const initialState : ReadonlyArray<Highcharts.Options> = [];

export const chartsReducer = createReducer(
    initialState,
    on(ChartsActions.addChart, (state, { chartOptions }) => [...state, chartOptions])
);