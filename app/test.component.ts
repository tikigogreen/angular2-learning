import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'test',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses">
            {{ course }}
            </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class TestComponent {
    title = "The title of courses page: here";
    // courses = ["Courses1", "Courses2", "courses3"]
    courses;
    constructor(CourseService: CourseService){
        this.courses = CourseService.getCourses();        
    }
} 
