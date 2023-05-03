import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   public name: string= "ironman";
   public age:  number= 30;

  get capitalizedName(): string{
    // return "hello world".toUpperCase();
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} is ${this.age} years old`;
  }

  changeHeroName(): void{
    this.name = "Spiderman";
  }

  changeHeroAge(): void{
    this.age = 40;
  }

  resetForm(): void{
    this.name = "ironman";
    this.age = 30;
  }



}
