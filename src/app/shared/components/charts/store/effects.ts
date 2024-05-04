
import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {chartsActions} from './actions'
import { ChartService } from '../../../services/chart.service'

// export const getFeedEffect = createEffect(
//   (actions$ = inject(Actions), chartService = inject(ChartService)) => {
//     return actions$.pipe(
//       ofType(chartsActions.getCharts),
//       switchMap(({}) => {
//         return chartService.createNewChart().pipe(
//           map((feed: GetFeedResponseInterface) => {
//             return feedActions.getFeedSuccess({feed})
//           }),
//           catchError(() => {
//             return of(feedActions.getFeedFailure())
//           })
//         )
//       })
//     )
//   },
//   {functional: true}
// )