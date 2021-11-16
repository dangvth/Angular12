import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public message = '123';
  @ViewChild('thangCam') thangCam: ChildComponent | undefined;
  @ViewChild('thangQuyt') thangQuyt: ChildComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(name: string){
    this.message = 'Chào con ' + name;
  }

  public giveMoney() {
    this.thangCam?.giveMoney(5);
    this.thangQuyt?.giveMoney(20);
  }
}
