import {Component, Input} from '@angular/core';
import {Interview} from '../interview.model';

@Component({
    selector: 'pair-with',
    templateUrl: 'pair-with.component.html'
})
export class PairWithComponent {
    @Input() interviews: Interview[] = [];

    getPanelistsWithPartiallyFilledInterviews() {
        let panelists: string[] = this.interviews
            .filter(interview => interview.signup && interview.panelists.length > 0)
            .map(interview => interview.panelists[0].name);
        return this.removeDuplicates(panelists).slice(0, 5);
    }

    removeDuplicates = (list: string[]) => list.filter((elem, pos, arr) => arr.indexOf(elem) == pos);
}