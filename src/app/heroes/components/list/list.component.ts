import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?: string;
  public heroList:        string[] = [
    'Spiderman','Ironman','Hulk','Capitan America'
  ];

  removeLastHero() {
    this.deletedHero = this.heroList.pop();
  }
}
