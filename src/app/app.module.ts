import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DefaultChangeDetectionComponent, DefaultChangeDetectionModule} from './default-change-detection';
import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ToggleStateService} from './toggle-state.service';
import {OnPushChangeDetectionComponent, OnPushChangeDetectionModule} from './on-push-change-detection';
import {OnPushChangeDetectionObservablesComponent, OnPushChangeDetectionObservablesModule} from './on-push-change-detection-observables';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/default-change-detection',
    pathMatch: 'full'
  },
  {
    path: 'default-change-detection',
    component: DefaultChangeDetectionComponent
  },
  {
    path: 'on-push-change-detection',
    component: OnPushChangeDetectionComponent
  },
  {
    path: 'on-push-change-detection-observables',
    component: OnPushChangeDetectionObservablesComponent
  }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DefaultChangeDetectionModule,
    OnPushChangeDetectionModule,
    OnPushChangeDetectionObservablesModule
  ],
  providers: [
    ToggleStateService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppModule {
}
