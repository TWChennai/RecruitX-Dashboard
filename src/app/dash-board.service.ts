import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Interview} from './interview.model';
import {Observable} from 'rxjs';
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
        let headers = new Headers({Authorization: "auth_key"});
        return this.http.get("url",
            {headers: headers}).map(data => {
            let totalSignUpList: any[] = data.json();
            let collectedSignUpList: {} = {};

            totalSignUpList.forEach(function (objData) {
                objData.statistics.forEach(function (eachObj: any) {
                    if (!collectedSignUpList[eachObj.team]) {
                        collectedSignUpList[eachObj.team] = {team: eachObj.team, count: [eachObj.count]};
                    } else {
                        collectedSignUpList[eachObj.team].count.push(eachObj.count);
                    }
                });
            });
            return Object.values(collectedSignUpList).map((signUpList: any[]) => new SignUpList(signUpList));
        });
    }
}