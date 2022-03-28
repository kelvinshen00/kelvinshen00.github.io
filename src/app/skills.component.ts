import { Component } from '@angular/core';
import { skillData } from 'src/content';

@Component({
    selector: 'skills',
    templateUrl: './skills.component.html',
    styleUrls: []
})
export class SkillsComponent {
    skills = skillData;
}