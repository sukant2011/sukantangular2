import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-hero-detail',
  template: `

    <div *ngIf="hero" class="detailContainer">
      <h2>{{hero.name}} details!</h2>
      
      <div class="form-group">
      	<label>Employee Id: </label>
      	<input value="{{hero.id}}" placeholder="name" class="form-control"/>
      </div>
      <div class="form-group">
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"  class="form-control"/>
      </div>
      <div class="form-group">  
      	<label>Email: </label>
        <input [(ngModel)]="hero.email" placeholder="email"  class="form-control"/>
      </div>
      <div class="form-group">  
      	<label>Phone: </label> 
        <input [(ngModel)]="hero.phone" placeholder="phone"  class="form-control"/>
      </div>
      <div class="form-group">  
      	<label>Website: </label> 
        <input [(ngModel)]="hero.website" placeholder="website"  class="form-control"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}