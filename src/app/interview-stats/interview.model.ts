import { Candidate } from './candidate.model';

export class Interview {
    public candidate: Candidate;


    constructor(interview: any) {
        this.candidate = new Candidate(interview.candidate);
    }
}