import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InterviewStatsComponent } from './interview-stats/interview-stats.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashBoardService } from './dash-board.service';
import { HttpModule } from '@angular/http';
import { PairWithComponent } from './pair-with/pair-with.component';
import { ToThankComponent } from "./to-thank/to-thank.component";
import { SkilsStatsComponent } from "./skills-stats/skills-stats.component";
import { ChartsModule } from 'ng2-charts';


@NgModule({
    imports: [
        BrowserModule, HttpModule,ChartsModule
    ],
    declarations: [
        AppComponent,
        InterviewStatsComponent,
        PairWithComponent,
        ToThankComponent,
        SkilsStatsComponent,
        LineChartComponent
    ],
    providers: [DashBoardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
