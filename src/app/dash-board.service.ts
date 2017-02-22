import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Interview } from './interview.model';
import { Observable } from 'rxjs';

@Injectable()
export class DashBoardService {

    constructor(private http: Http) {
    }

    getAllInterviews(): Observable<Array<Interview>> {
        let headers = new Headers({ Authorization : "auth_key" });
        return this.http.get("url",
            { headers: headers}).map(data => {
                let interviews: any[] = data.json();
                return interviews.map(interview => new Interview(interview));
        });
    }

}