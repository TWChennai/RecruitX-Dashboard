import {Component, Input} from "@angular/core";
import {Interview} from "../interview.model";
@Component({
    selector: 'to-thank',
    template: `<img src="../../../public/images/Star.png" style="width:350px; height:170px;"/>
                <div class="title">You are our stars! Thank You for signing up :)</div>
                <div *ngFor="let panelist of getPanelistsWithPartiallyFilledInterviews()">
                    <div class="panelists">{{panelist}}</div>
                </div>`
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