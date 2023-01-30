import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CreateUserRequest,
  DeleteUserRequest,
  ListReply,
  UpdateUserRequest,
  UserReply
} from "../../protos/generated/userCrud_pb";
import {UserServiceClient} from "../../protos/generated/userCrud_pb_service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  @Input() user?: UserReply;
  @Output() usersUpdated = new EventEmitter<UserReply>();
  client?: UserServiceClient;

  constructor() {
    this.client = new UserServiceClient("http://localhost:5070");
  }

  ngOnInit(): void {
  }

  updateUser(user: UserReply) {
    let request = new UpdateUserRequest();
    request.setName(user.getName());
    request.setAge(user.getAge());
    request.setId(user.getId());
    this.client?.updateUser(request, (error, responseMessage)=>
    {
      if(responseMessage) {
        this.usersUpdated.emit(responseMessage);
      }
    })
  }

  deleteUser(user: UserReply) {
    let request = new DeleteUserRequest();
    request.setId(user.getId());
    this.client?.deleteUser(request, (error, responseMessage)=>
    {
      if(responseMessage) {
        this.usersUpdated.emit(responseMessage);
      }
    })
  }

  createUser(user: UserReply) {
    let request = new CreateUserRequest();
    request.setName(user.getName());
    request.setAge(user.getAge());
    this.client?.createUser(request, (error, responseMessage)=>
    {
      if(responseMessage) {
        this.usersUpdated.emit(responseMessage);
      }
    })
  }
}
