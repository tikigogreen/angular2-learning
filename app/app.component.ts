import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
import {AuthorComponent} from './author.component';
import {FevoriteComponent} from './favorite.component';
import {SomeComp} from './new-form.component';

@Component({
    selector: 'my-app',
    template: `
        <img src="{{ imageURL }}" />                        
        <h1>{{title}}</h1>
        <test></test>
        <author></author>
        <some-comp></some-comp>  

        <!-- 2 ways binding -->
        <input type="text" [value]="title" (input)="title = $event.target.value"/>
        <input type="button" (click)="title = '' " value="clear" />
        Preview: {{ title }}

        <!-- 2 ways binding; make more solid with ngModel -->
        <!-- combine property and event binding (2 ways binding) -->
        <input type="text" [(ngModel)]="title" />            

        <favorite></favorite>

        <div (click)="onDivClick($event)">
            <button (click)="onClick($event)">Submit</button>
        </div>      
    `,
    directives: [TestComponent, AuthorComponent, FevoriteComponent, SomeComp]    
})
export class AppComponent {
    title = "Angular App";
    imageURL = "http://localhost/img/square-u/logo-squaretrade--no_text.png";

    // onDivClick($event) {
    //     console.log("Handled by Div", $event);
    // }

    // onClick($event) {
    //     console.log("button is clicked", $event);    
    // }

    isFavorite = false;
    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}