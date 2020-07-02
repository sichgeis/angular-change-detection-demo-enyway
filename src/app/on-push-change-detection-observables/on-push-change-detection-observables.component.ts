// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'on-push-cd-observables',
  template: `
    <h2>OnPush Change Detection (Observables)</h2>
    <div>
      <button class="trigger" (click)="null">Trigger Change Detection</button>
      <button class="trigger" (click)="emitAndTriggerChangeDetection()">Push next Fibonacci to Cmp17</button>
    </div>
    <div class="tree">
      <ul>
        <li>
          <cmp-one [model]="model"></cmp-one>
        </li>
      </ul>
    </div>
    <div style="margin-bottom: 5em; clear: both;"></div>
  `
})
export class OnPushChangeDetectionObservablesComponent implements OnInit {

  model: Subject<any> = new BehaviorSubject(0);
  notifier: Subject<any>;
  private number = 0;

  emitAndTriggerChangeDetection() {
    this.model.next('fib(' + this.number + ') = ' + this.fibonacci(this.number));
    this.number++;
  }

  ngOnInit(): void {
    this.model.next('fib(' + this.number + ') = ' + this.fibonacci(this.number));
    this.number++;
  }

  fibonacci(num): number {
    if (num <= 1) {
      return 1;
    }

    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

}
