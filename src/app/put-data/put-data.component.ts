import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-put-data',
  templateUrl: './put-data.component.html',
  styleUrls: ['./put-data.component.scss']
})
export class PutDataComponent implements OnInit {

  constructor(private httpService: HttpServerService) { }

  ngOnInit(): void {
    const payload = { body: 'Put comment', postId: 1 };
    this.httpService.putComment(4, payload).subscribe((data) => {
      console.log('putComment', data);
    });
  }

}
