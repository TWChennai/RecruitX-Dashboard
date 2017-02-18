import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InterviewStatsComponent } from './interview-stats/interview-stats.component';
import { DashBoardService } from './dash-board.service';
import { HttpModule } from '@angular/http';
import { PairWithComponent } from './pair-with/pair-with.component';

@NgModule({
    imports: [
        BrowserModule, HttpModule
    ],
    declarations: [
        AppComponent,
        InterviewStatsComponent,
        PairWithComponent
    ],
    providers: [DashBoardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
