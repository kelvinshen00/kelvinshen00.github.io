import { Component } from '@angular/core';
import { workData } from 'src/content';

@Component({
    selector: 'work',
    templateUrl: './work.component.html',
    styleUrls: []
})
export class WorkComponent {
    works = workData;
}