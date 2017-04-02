import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Interview } from './interview.model';
import { Observable } from 'rxjs';
import {SignUpList} from "./signUpList.model";

@Injectable()
export class DashBoardService {

    constructor(private http: Http) {
    }

    getAllInterviews(): Observable<Array<Interview>> {
        let headers = new Headers({Authorization: "auth_key"});
        return this.http.get("url",
            {headers: headers}).map(data => {
            let interviews: any[] = data.json();
            return interviews.map(interview => new Interview(interview));
        });
    }

    getAllSignUps(): Observable<Array<SignUpList>> {
        let headers = new Headers({Authorization: "ab998e4e-4a14-4e00-bad7-0b542ed35360"});
        return this.http.get("https://recruitx-qa.herokuapp.com/panelists?number_of_weeks=4",
            {headers: headers}).map(data => {
            let totalSignUpList: any[] = data.json();
            let collectedSignUpList: {} = {};

            totalSignUpList.forEach(function (x) {
                x.statistics.forEach(function (y: any) {
                    if (!collectedSignUpList[y.team]) {
                        collectedSignUpList[y.team] = {team: y.team, count: [y.count]};
                    } else {
                        collectedSignUpList[y.team].count.push(y.count);
                    }
                });
            });
            return Object.values(collectedSignUpList).map(function (signUpList) {
                return new SignUpList(signUpList);
            });
        });
    }
}