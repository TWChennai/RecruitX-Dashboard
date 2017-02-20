import {Component, Input} from '@angular/core';
import {Interview} from "../interview.model";
@Component({
    selector: 'skills-stats',
    templateUrl: 'skills-stats.component.html'
})
export class SkilsStatsComponent {
    @Input() interviews: Interview[] = [];

    isCandidateSkill = (candidateSkill: string) => {
        let candidateSkills = this.getCandidateSkills();
        return candidateSkills.indexOf(candidateSkill) != -1;
    };

    private getCandidateSkills = () => {
        let skillsArray: string[] = [];
        this.interviews.map((interview => interview.candidate.skills.split(",").map((skill =>
            skillsArray.push(skill.trim())))));
        return skillsArray;
    }
}