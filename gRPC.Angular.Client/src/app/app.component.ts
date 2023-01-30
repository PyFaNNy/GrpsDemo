import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";
import {ListReply} from "./protos/generated/userCrud_pb";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gRPC.Angular.Client';

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    this.api.list(1,1).then((data: ListReply) => {
      console.log(data);
    })
  }
}
