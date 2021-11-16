import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent implements OnInit {

  constructor(private httpService: HttpServerService) { }

  ngOnInit(): void {
    this.httpService.deleteComment(3).subscribe((data) => {
      console.log('deleteComment', data);
    });
  }

}
