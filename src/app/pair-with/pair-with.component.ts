import { Component, Input } from '@angular/core';
import { Interview } from '../interview-stats/interview.model';

@Component({
    selector: 'pair-with',
    template: `<div class="title">Do you want pair with? </div>
                <div *ngFor="let panelist of getPanelistsWithPartiallyFilledInterviews()">
                <div class="panelists">{{panelist}}</div>
                </div>`
})
export class PairWithComponent {
    @Input() interviews: Interview[] = [];

    getPanelistsWithPartiallyFilledInterviews() {
        let panelists: string[] = this.interviews
            .filter(interview => interview.signup && interview.panelists.length > 0)
            .map(interview => interview.panelists[0].name);
        return this.removeDuplicates(panelists).sort(() => 0.5 - Math.random()).slice(0,5);
    }

    removeDuplicates = (list: string[]) => list.filter((elem, pos, arr) => arr.indexOf(elem) == pos);
}