import type { Request, Response } from "express-serve-static-core";
import type { CreateUserDto } from "../dtos/CreateUser.dto";
import type { CreateUserParams } from "../types/params";
import type { CreateUserQueryParams } from "../types/query-params";
import type { User } from "../types/response";

export function getUsers(_req: Request, res: Response) {
	res.status(200).send([]);
}

export function createUser(
	_req: Request<CreateUserParams, object, CreateUserDto, CreateUserQueryParams>,
	res: Response<User>
) {
	res.status(201).send({ id: 123, username: "", email: "" });
}

export function getUserById(_req: Request, res: Response) {
	res.status(200).send({});
}
