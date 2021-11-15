import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Đăng Võ';
  public fruits = [
    { name: 'Táo', price: 12, sale: false },
    { name: 'Nho', price: -3, sale: true }
  ];
  public districts: string[] = ['Quận Huyện'];
  public datas = [
    { city: 'Chọn thành phố', district: ['Quận Huyện'] },
    { city: 'An Giang', 
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ]
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    }
  ]

  constructor() { }

  public ngOnInit(): void {
    console.log('Thành phố: ', this.datas)
  }

  /**
   * changecity
   */
  public changeCity(event: any) {
    const city = event.target.value;
    
    if (!city) {
      return;
    }
    
    // option 1
    // const search = this.datas.filter((data) => data.city === city);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // option 2
    this.districts = this.datas.find(data => data.city === city)?.district || [];
  }
}
