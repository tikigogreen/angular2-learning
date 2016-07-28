import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
    selector: 'author',
    template: `
        <h2>Author</h2>
        {{title}}
        <ul>
            <li *ngFor="#author of authors">
            {{ author }}
            </li>
        </ul>
    `,
    providers: [CourseService]     
})

export class AuthorComponent {
    title = "List of authors here";
    authors;
    constructor(CourseService: CourseService){
        this.authors = CourseService.getAuthors();
    }
}