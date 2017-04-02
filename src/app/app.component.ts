import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Observable } from 'rxjs';
import { DashBoardService } from './dash-board.service';
import { Interview } from './interview.model';
import {SignUpList} from "./signUpList.model";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public pageNumber: number = 3;
    public interviews: Interview[] = [];
    public signUpsList: SignUpList[];

    constructor(service: DashBoardService) {
        // let timeInterval = Observable.interval(3000).timeInterval();
        // timeInterval.subscribe(data => this.pageNumber = data.value % 5);
        service.getAllInterviews().subscribe((data) => this.interviews = data)
        service.getAllSignUps().subscribe((data) => {
            this.signUpsList = data;
        });

    }
}
