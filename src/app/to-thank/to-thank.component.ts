import {Component, Input} from "@angular/core";
import {Interview} from "../interview.model";
@Component({
    selector: 'to-thank',
    templateUrl: 'to-thank.component.html'
})

export class ToThankComponent {
    @Input() interviews: Interview[] = [];

    getPanelistsWithPartiallyFilledInterviews() {
        let panelistsArray: string[] = [];
        this.interviews
            .filter(interview => interview.panelists.length > 0)
            .map(interview => interview.panelists).forEach(panelists => panelists.forEach(panelist => panelistsArray.push(panelist.name)));
        return this.removeDuplicates(panelistsArray).slice(0, 5);
    }

    removeDuplicates = (list: string[]) => list.filter((elem, pos, arr) => arr.indexOf(elem) == pos);
}