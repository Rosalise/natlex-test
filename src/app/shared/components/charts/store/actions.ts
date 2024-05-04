import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const ChartsActions = createActionGroup({
    source: 'charts',
    events: {
        'Add Chart': props<{chartOptions : Highcharts.Options}>(),
        'Remove Chart': emptyProps(),
    }
});

// export const ChartsApiActions = createActionGroup({
//     source : 'Charts API',
//     events: {
//         'Retrieved Charts List' : props<{charts : ReadonlyArray<Highcharts.Options>}>(),
//     },
// });

