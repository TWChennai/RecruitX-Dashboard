import { Component, Input } from '@angular/core';
import {SignUpList} from "../signUpList.model";
@Component({
    selector: 'line-chart',
    templateUrl: 'line-chart.component.html'
})
export class LineChartComponent {
    @Input() signUpsList: SignUpList[] = [];

    public lineChartData() {
        console.log("***************");
        console.log(this.signUpsList);
        return this.signUpsList.map(eachList => {
            return {
                data: [eachList.signUpsCount],
                label: eachList.team,
                lineTension: 0.2
            }
        });
    }

    public lineChartLabels: Array<any> = ['week-1', 'week-2', 'week-3', 'week-4'];
    public line_options: any = {
        responsive: true, scaleShowHorizontalLines: false,
        scaleShowVerticalLines: false, animationEasing: "easeInOutElastic",
        maintainAspectRatio: false, legend: { display: false } };

    public lineChartColors:Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0)',
            borderColor: '#2F8EF5',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0)',
            borderColor: '#CC16C6',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0)',
            borderColor: '#49A60C',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
}
