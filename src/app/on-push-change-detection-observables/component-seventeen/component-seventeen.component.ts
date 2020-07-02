// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, NgZone, OnInit} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'cmp-seventeen',
  template: '<a class="on-push subscriber">Cmp17 <br> {{ foo }}</a>',
//  template: '<a class="on-push subscriber">Cmp17 <br> {{model | async}}</a>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeventeen implements OnInit, DoCheck {

  @Input() model: Subject<any>;
  foo: any;

  constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.model.subscribe(res => {
      console.log(res);
      this.foo = res;
//      this.cd.markForCheck();
      toggleClass(this.el, this.zone, 'checked-observable');
    });
  }

  ngDoCheck() {
    toggleClass(this.el, this.zone);
  }

}
