import { Route } from '@angular/router';

export const appRoutes: Route[] = [
{
    path: '',
    loadChildren: () => 
        import('../app/components/component.routes').then((m) => m.routes),
},
{
    path: './settings',
    loadChildren: () => 
        import('../app/components/component.routes').then((m) => m.routes),
}
];
