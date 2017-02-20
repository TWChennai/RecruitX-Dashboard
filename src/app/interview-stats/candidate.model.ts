export class Candidate {
    public role: any;
    public skills: string;

    constructor(candidate: any) {
        this.role = candidate.role;
        this.skills = candidate.skills;
    }
}