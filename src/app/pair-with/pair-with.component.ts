import {Component, Input} from '@angular/core';
import {Interview} from '../interview.model';

@Component({
    selector: 'pair-with',
    templateUrl: 'pair-with.component.html'
})
export class PairWithComponent {
    @Input() partiallyFilledSignUps: string[] = [];
}