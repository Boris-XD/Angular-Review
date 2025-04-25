import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public Hero : string = 'Spiderman';
  public AlterEgo: string = 'Peter Parker';
  public Publisher: string = 'Marvel Comics';
  public FirstAppearance: string = 'Amazing Fantasy #15';
  public CreatedBy: string = 'Stan Lee';
  public Actors: string = 'Tobey Maguire, Andrew Garfield, Tom Holland';
}
