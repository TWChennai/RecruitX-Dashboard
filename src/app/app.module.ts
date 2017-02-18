import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InterviewStatsComponent } from './interview-stats/interview-stats.component';
import { DashBoardService } from './dash-board.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule, HttpModule
    ],
    declarations: [
        AppComponent,
        InterviewStatsComponent
    ],
    providers: [DashBoardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
