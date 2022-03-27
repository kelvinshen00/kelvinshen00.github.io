import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PastProjectComponent } from './pastproject.component';
import { SkillsComponent } from './skills.component';
import { WorkComponent } from './work.component';

@NgModule({
  declarations: [
    AppComponent,
    PastProjectComponent,
    WorkComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
