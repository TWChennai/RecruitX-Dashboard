import { Candidate } from './candidate.model';

export class Interview {
    public candidate: Candidate;
    public signup: boolean;
    public panelists: any[];

    constructor(interview: any) {
        this.candidate = new Candidate(interview.candidate);
        this.panelists = interview.panelists;
        this.signup = interview.signup;
    }
}