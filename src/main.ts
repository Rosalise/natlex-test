import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { chartsReducer } from './app/shared/components/charts/store/reducers';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideStore(),
    provideState('charts', chartsReducer)
  ],
});
