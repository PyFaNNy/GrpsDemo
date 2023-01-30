import {Component, OnInit} from '@angular/core';
import {ListReply, UserReply} from "./protos/generated/userCrud_pb";
import {ServiceError, UserServiceClient} from "./protos/generated/userCrud_pb_service";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import { client } from '@improbable-eng/grpc-web/dist/typings/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gRPC.Angular.Client';
  users: UserReply[] = [];
  userToEdit?: UserReply;
  client?: UserServiceClient;

  constructor()
  {
    this.client = new UserServiceClient("http://localhost:5070");
  }

  ngOnInit() {
    this.client?.listUsers(new Empty(), (error, responseMessage) =>
    {
      if (error) {
        console.log(`Error: {err.message}`);
      }
      else {
        this.users = responseMessage?.getUsersList() ?? [];
      }
    })
  }

  updateUsersList(users: UserReply) {
    this.ngOnInit();
  }

  initNewUser() {
    this.userToEdit = new UserReply();
  }

  editUser(user: UserReply) {
    this.userToEdit = user;
  }
}
