"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HEROES = [
    { id: 1, name: 'Sukant Sharma', email: 'sukant@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 2, name: 'Rahul Jain', email: 'rahul.jain@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 3, name: 'Gaurav Kumar', email: 'gaurav.kumar@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 4, name: 'Vishal Kumar', email: 'vishal.kumar@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 5, name: 'Rohit Kumar', email: 'rohit.kumar@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 6, name: 'Sachin Kumar', email: 'sachin.kumar@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 7, name: 'Vaibhav Bharti', email: 'vaibhav.bharti@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 8, name: 'Manoj Sharma', email: 'manok.sharma@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 9, name: 'Rohan', email: 'rohan@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 10, name: 'Manish Bhart', email: 'manish.bhart@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 11, name: 'Mohan Kumar', email: 'mohan@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 12, name: 'Sachin Rana', email: 'sachin.rana@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' },
    { id: 13, name: 'Manvinder Tanwar', email: 'manvinder@mobilyte.com', phone: '9872749463', website: 'www.sukant.com' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <div class=\"col-md-3\">\n\t    <ul class=\"heroes\">\n\t      <li *ngFor=\"let hero of heroes\"\n\t        [class.selected]=\"hero === selectedHero\"\n\t        (click)=\"onSelect(hero)\">\n\t        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t      </li>\n\t    </ul>\n    </div>\n    <div class=\"col-md-9\">\n    \t<my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    </div>\n    \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map