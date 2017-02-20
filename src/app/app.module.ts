import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InterviewStatsComponent } from './interview-stats/interview-stats.component';
import { DashBoardService } from './dash-board.service';
import { HttpModule } from '@angular/http';
import { PairWithComponent } from './pair-with/pair-with.component';
import {ToThankComponent} from "./to-thank/to-thank.component";
import {SkilsStatsComponent} from "./skils-stats/skils-stats.component";

@NgModule({
    imports: [
        BrowserModule, HttpModule
    ],
    declarations: [
        AppComponent,
        InterviewStatsComponent,
        PairWithComponent,
        ToThankComponent,
        SkilsStatsComponent
    ],
    providers: [DashBoardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
