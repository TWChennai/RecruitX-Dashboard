import { Component } from '@angular/core';
import { DashBoardService } from '../dash-board.service';
import { Interview } from './interview.model';

@Component({
    selector: 'interview-stats',
    templateUrl: 'interview-stats.html'
})
export class InterviewStatsComponent {
    private interviews: Interview[] = [];

    constructor(service: DashBoardService) {
        service.getAllInterviews().subscribe((data) => this.interviews = data)
    }

    getInterviewsFor = (role: string) => this.interviews.filter(interview => role.includes(interview.candidate.role.name)).length;
}