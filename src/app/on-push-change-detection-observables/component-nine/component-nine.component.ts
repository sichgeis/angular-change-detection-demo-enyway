// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'cmp-nine',
    template: `
        <a class="on-push">Cmp9</a>

        <ul>
            <li>
                <cmp-seventeen [model]="model"></cmp-seventeen>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentNine implements DoCheck {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
