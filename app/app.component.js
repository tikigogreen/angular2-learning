System.register(['angular2/core', './test.component', './author.component', './favorite.component', './new-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1, author_component_1, favorite_component_1, new_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (new_form_component_1_1) {
                new_form_component_1 = new_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    this.imageURL = "http://localhost/img/square-u/logo-squaretrade--no_text.png";
                    // onDivClick($event) {
                    //     console.log("Handled by Div", $event);
                    // }
                    // onClick($event) {
                    //     console.log("button is clicked", $event);    
                    // }
                    this.isFavorite = false;
                }
                AppComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <img src=\"{{ imageURL }}\" />                        \n        <h1>{{title}}</h1>\n        <test></test>\n        <author></author>\n        <some-comp></some-comp>  \n\n        <!-- 2 ways binding -->\n        <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\"/>\n        <input type=\"button\" (click)=\"title = '' \" value=\"clear\" />\n        Preview: {{ title }}\n\n        <!-- 2 ways binding; make more solid with ngModel -->\n        <!-- combine property and event binding (2 ways binding) -->\n        <input type=\"text\" [(ngModel)]=\"title\" />            \n\n        <favorite></favorite>\n\n        <div (click)=\"onDivClick($event)\">\n            <button (click)=\"onClick($event)\">Submit</button>\n        </div>      \n    ",
                        directives: [test_component_1.TestComponent, author_component_1.AuthorComponent, favorite_component_1.FevoriteComponent, new_form_component_1.SomeComp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map