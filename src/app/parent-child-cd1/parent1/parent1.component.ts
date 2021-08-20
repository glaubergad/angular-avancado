import {Component, DoCheck, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component{

  value = this._value;

  constructor(
    private ngZone: NgZone
  ) {
    ngZone.runOutsideAngular(() => {
      setInterval(() => this.value = this._value, 1);
    });
  }



  get _value(): number {
    return Math.floor(Math.random() * 10);
  }


/*export class Parent1Component implements OnInit, DoCheck { // com doCheck

  constructor() { }

  get _value(): number {
    return Math.floor(Math.random() * 10);
  }

  value = this._value;

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.value = this._value;
  }*/

}
