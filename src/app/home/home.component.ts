import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Đăng Võ';
  public fruits= [
    { name: 'Táo', price: 12, sale: false },
    { name: 'Nho', price: -3, sale: true }
  ];
  
  constructor() { }

  public ngOnInit(): void {
    console.log('Trái cây: ', this.fruits)
  }

}
