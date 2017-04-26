import {Component, Input} from '@angular/core';
import {SignUpList} from "../signUpList.model";
@Component({
    selector: 'line-chart',
    templateUrl: 'line-chart.component.html'
})
export class LineChartComponent {
    @Input() signUpsList: SignUpList[] = [];

    public lineChartData() {
        return this.signUpsList.map(eachList => {
            return {
                data: eachList.signUpsCount,
                label: eachList.team,
                lineTension: 0.1
            }
        });
    }

    public lineChartLabels: Array<any> = ['week-1', 'week-2', 'week-3', 'week-4'];
    public lineChartOptions: any = {
        responsive: true, scaleShowHorizontalLines: false,
        scaleShowVerticalLines: false, animationEasing: "easeInOutElastic",
        maintainAspectRatio: false, legend: {display: true}
    };

    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(47,142,245,0.1)',
            borderColor: '#2F8EF5',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(204,22,198,0.1)',
            borderColor: '#CC16C6',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            backgroundColor: 'rgba(28,144,153,0.1)',
            borderColor: '#1C9099',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(76,76,76,0.1)',
            borderColor: '#4C4C4C',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(253,187,132,0.1)',
            borderColor: '#FDBB84',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
}
