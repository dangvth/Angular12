import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() childCall: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  helloDad() {
    console.log('Chào cha');
    this.childCall.emit(this.name);
  }

  giveMoney(amount: number) {
    console.log('Con là ' + this.name + '. Cảm ơn cha cho con ' + amount + ' đồng');
  }
}
