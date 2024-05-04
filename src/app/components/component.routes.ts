import { Route } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { SettingsComponent } from "./settings/settings.component";

export const routes: Route[] = [
    {
        path: '',
        component: ViewComponent,
    },
    {
        path: 'settings',
        component: SettingsComponent,
    },
]