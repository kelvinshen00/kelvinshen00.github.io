import { Component } from '@angular/core';
import { skillData, workData } from 'src/content';

@Component({
    selector: 'skills',
    templateUrl: './skills.component.html',
    styleUrls: []
})
export class SkillsComponent {
    skill = skillData;
}