import { Request, Response } from "express";
import { getUserById } from "../model/user";
import * as userService from "../service/user";
import { GetUserQuery } from "../interfaces/user";

export function getUsers(req: Request<any, any, any, GetUserQuery>, res: Response) {
const {query} = req;

  const data = userService.getUsers();
  res.json(data);
}

export function getUsersById(req: Request, res: Response) {
  const { id } = req.params;
  //   const { query } = req.query;
  //   console.log(req.params); //url bata aaune chai params bhayo
  //   console.log(req.query); //query chai url ma ?key=value rakhyo bhane chai esari aaucha
  //   console.log(req.body);
  //   res.json({
  //     message: `This is a user of id ${id}`,
  //     query: `This is a user of id ${query}`,
  //   });

  const data = getUserById(id);
  res.json(data);
}

export async function createUser(req: Request, res: Response) {
  const { body } = req;
  await userService.createUser(body);
  res.json({
    message: "User created",
  });
}

export function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  userService.deleteUser(id);
  res.json({
    message: "User deleted",
  });
}
