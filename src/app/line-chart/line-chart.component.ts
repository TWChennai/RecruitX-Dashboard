import { Component, Input } from '@angular/core';
@Component({
    selector: 'line-chart',
    templateUrl: 'line-chart.component.html'
})
export class LineChartComponent {


    public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'IFaber',lineTension: 0.2},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'BCG',lineTension: 0.2},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'PAM',lineTension: 0.2}
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public line_options:any = { responsive: true, scaleShowHorizontalLines: false,
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
