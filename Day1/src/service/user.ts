import { User } from "../interfaces/user";
import * as userModel from "../model/user";
import bcrypt from "bcrypt";

export function getUsersById(id: string) {
  const data = userModel.getUserById(id);

  if (!data) {
    throw new Error("User not found");
  }
  return data;
}

export async function createUser(user: User) {
  const password = await bcrypt.hash(user.password, 10);
  userModel.createUser({ ...user, password });
}

export function deleteUser(id: string) {
  userModel.deleteUserById(id);
}

export function getUsers() {
  return userModel.getUsers();
}

export function getUserByEmail(email: string) {
  const data = userModel.getUserByEmail(email);
  if (!data) {
    throw new Error("User not found");
  }
  return data;
}
