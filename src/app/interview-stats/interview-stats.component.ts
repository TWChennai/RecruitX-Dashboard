import { Component } from '@angular/core';
import { DashBoardService } from '../dash-board.service';
import { Interview } from './interview.model';

@Component({
    selector: 'interview-stats',
    template: `<div>Dev interview count</div>
                <div>{{getInterviewsFor("Dev")}}</div>`
})
export class InterviewStatsComponent {
    private interviews: Interview[] = [];

    constructor(service: DashBoardService) {
        service.getAllInterviews().subscribe((data) => this.interviews = data)
    }

    getInterviewsFor = (role: string) => this.interviews.filter(interview => interview.candidate.role.name == role).length;
}