import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public loginName = 'user';
  public myColor = 'red';
  public counter = 0;
  public counterSqr = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.getCounter();
    this.counterSqr = this.common.sqr(this.counter);
    this.common.setCounter(this.counter + 1);
  }

}
