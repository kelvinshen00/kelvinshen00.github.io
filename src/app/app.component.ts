import { Component, ViewChild } from '@angular/core';
import { PastProjectComponent } from './pastproject.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(PastProjectComponent) child!:PastProjectComponent;
  title = 'My Personal Website';

  scroll(htmlElement: HTMLElement){
    htmlElement.scrollIntoView();

  }
}
