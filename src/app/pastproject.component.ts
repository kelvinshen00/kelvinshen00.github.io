import { Component } from '@angular/core';
import { pastProjectData } from 'src/content';

@Component({
    selector: 'past-projects',
    templateUrl: './pastproject.component.html',
    styleUrls: ['./pastproject.component.css']
})
export class PastProjectComponent {
    pastProjects = pastProjectData;
    public isCollapsed = false;


}