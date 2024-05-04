import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ChartInterface } from "../../../types/chart.interface";
import { ChartDialogData } from "../../../types/chartDialogData.interface";

export const ChartsActions = createActionGroup({
    source: 'charts',
    events: {
        'Add Chart': props<{chartOptions : ChartInterface}>(),
        'Delete Chart': props<{index: number}>(),
        'Edit Chart': props<{chartOptions: ChartInterface}>()
    }
});
