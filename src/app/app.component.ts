import {Component} from '@angular/core';
import '../../public/css/styles.css';
import {Observable} from 'rxjs';
import {DashBoardService} from './dash-board.service';
import {Interview} from './interview.model';
import {SignUpList} from "./signUpList.model";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public pageNumber: number = 4;
    public interviews: Interview[] = [];
    public signUpsList: SignUpList[] = [];

    constructor(service: DashBoardService) {
        //noinspection TypeScriptUnresolvedFunction
        let timeInterval = Observable.interval(3000).timeInterval();
        timeInterval.subscribe(data => {
            let currentPageIndex: number = data.value % 5;
            let shouldSkip = (currentPageIndex === 0 && (this.partialSignUps().length == 0)) || (currentPageIndex === 2 && this.interviews.length === 0);
            this.pageNumber = shouldSkip ? ++currentPageIndex : currentPageIndex;
        });
        service.getAllInterviews().subscribe((data) => this.interviews = data);
        service.getAllSignUps().subscribe((data) => this.signUpsList = data);

    }

    public partialSignUps() {
        let panelists: string[] = this.interviews
            .filter(interview => interview.signup && interview.panelists.length > 0)
            .map(interview => interview.panelists[0].name);
        return this.removeDuplicates(panelists).slice(0, 5);
    }

    removeDuplicates = (list: string[]) => list.filter((elem, pos, arr) => arr.indexOf(elem) == pos);
}
