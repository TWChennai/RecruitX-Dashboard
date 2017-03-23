export class SignUpList {
    public team: string;
    public signUpsCount: number;

    constructor(signUps: any) {
        this.team = signUps.team;
        this.signUpsCount = signUps.count;
    }
}