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
        let timeInterval = Observable.interval(3000).timeInterval();
        timeInterval.subscribe(data => {
            let currentPageIndex: number = data.value % 5;
            if(currentPageIndex === 0 && !this.hasSignUps()){
                currentPageIndex++;
            }
            if(currentPageIndex ===2 && this.interviews.length > 0){
                currentPageIndex++;
            }
            return this.pageNumber = currentPageIndex;
        });
        service.getAllInterviews().subscribe((data) => this.interviews = data);
        service.getAllSignUps().subscribe((data) => this.signUpsList = data);

    }

    public hasSignUps() {
        let signUpFlag: boolean = false;
        this.signUpsList.forEach(function (x) {
            x.signUpsCount.forEach(function (y) {
                if (y > 0) {
                    signUpFlag = true;
                }
            });
        });
        return signUpFlag;
    }
}
