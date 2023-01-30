import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserServiceClient} from "./protos/generated/userCrud_pb_service";
import {GetUserRequest, ListReply, UserReply} from "./protos/generated/userCrud_pb";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  client: UserServiceClient;

  constructor() {
    this.client = new UserServiceClient("https://localhost:7251/grpc/grpc-web-service");
  }

  get(path:any, val:any): Promise <object> {
    return new Promise((resolve, reject) => {
      console.log('ApiService.get', path, val);
      const req = new GetUserRequest();
      req.setId(val);
      this.client.getUser(req,  (err, response) => {
        console.log('ApiService.get.response', response?.toObject());
        if (err) {
          return reject(err);;
        }
        resolve(response ? response.toObject() : {err: "error"})
      });
    });
  }

  list(path:any, val:any): Promise <ListReply> {
    return new Promise((resolve, reject) => {
      console.log('ApiService.list', path, val);
      this.client.listUsers(new Empty(),  (err, response) => {
        console.log('ApiService.list.response', response);
        if (err) {
          return reject(err);;
        }
        // @ts-ignore
        resolve(response);
      });
    });
  }
}
