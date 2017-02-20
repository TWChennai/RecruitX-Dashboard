import { Component, Input } from '@angular/core';
import { Interview } from '../interview.model';

@Component({
    selector: 'interview-stats',
    templateUrl: 'interview-stats.component.html'
})
export class InterviewStatsComponent {
    @Input() interviews: Interview[] = [];

    getInterviewsFor = (role: string) => this.interviews.filter(interview => role.includes(interview.candidate.role.name)).length;
}