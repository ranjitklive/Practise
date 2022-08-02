import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input type="text" [(ngModel)]=data />
    <button type="button" (click)="onClick()">Click Me</button>
    <br><br><br>
    <h2 *ngIf="status; else elseBlock">{{data}}</h2>
    <ng-template #elseBlock>
      Nothing to display
    </ng-template>
    <div [ngSwitch]="myChoice">
      <div *ngSwitchCase="'One'">First block</div>
      <div *ngSwitchCase="'Two'">Second block</div>
      <div *ngSwitchCase="'Three'">Third block</div>
      <div *ngSwitchDefault>Default block</div>
    </div>
  `,
  styles: [
    `

    `
  ]
})
export class TestComponent implements OnInit {
  
  public data = "hello";
  public status = true;
  public myChoice = "Six";

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    console.log("click event");
  }
}
