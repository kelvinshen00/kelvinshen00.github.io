import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxMatTimelineModule } from "ngx-mat-timeline";

import { AppComponent } from './app.component';
import { PastProjectComponent } from './pastproject.component';
import { SkillsComponent } from './skills.component';
import { WorkComponent } from './work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PastProjectComponent,
    WorkComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    NgxMatTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
