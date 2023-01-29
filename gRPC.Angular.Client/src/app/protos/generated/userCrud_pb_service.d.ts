// package: users
// file: src/app/protos/userCrud.proto

import * as src_app_protos_userCrud_pb from "./userCrud_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceListUsers = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof src_app_protos_userCrud_pb.ListReply;
};

type UserServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_userCrud_pb.GetUserRequest;
  readonly responseType: typeof src_app_protos_userCrud_pb.UserReply;
};

type UserServiceCreateUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_userCrud_pb.CreateUserRequest;
  readonly responseType: typeof src_app_protos_userCrud_pb.UserReply;
};

type UserServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_userCrud_pb.UpdateUserRequest;
  readonly responseType: typeof src_app_protos_userCrud_pb.UserReply;
};

type UserServiceDeleteUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_userCrud_pb.DeleteUserRequest;
  readonly responseType: typeof src_app_protos_userCrud_pb.UserReply;
};

export class UserService {
  static readonly serviceName: string;
  static readonly ListUsers: UserServiceListUsers;
  static readonly GetUser: UserServiceGetUser;
  static readonly CreateUser: UserServiceCreateUser;
  static readonly UpdateUser: UserServiceUpdateUser;
  static readonly DeleteUser: UserServiceDeleteUser;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listUsers(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.ListReply|null) => void
  ): UnaryResponse;
  listUsers(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.ListReply|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: src_app_protos_userCrud_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: src_app_protos_userCrud_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: src_app_protos_userCrud_pb.CreateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: src_app_protos_userCrud_pb.CreateUserRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: src_app_protos_userCrud_pb.UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: src_app_protos_userCrud_pb.UpdateUserRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: src_app_protos_userCrud_pb.DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: src_app_protos_userCrud_pb.DeleteUserRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_userCrud_pb.UserReply|null) => void
  ): UnaryResponse;
}

