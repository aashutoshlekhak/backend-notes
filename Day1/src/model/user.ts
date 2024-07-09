import { User } from "../interfaces/user";

let users: User[] = [
  {
    name: "User 1",
    email: "user@user.com",
    password: "$2b$10$2eE47GLnoecGP2OzUrfwzOODNFQYU0OWu21LCI1eUBNknGzJ1tHY.",
    id: "1",
  },
];

let count = users.length;

export function getUsers() {
  return users;
}
export function getUserById(id: string) {
  return users.find(({ id: userId }) => userId == id);
}

export function deleteUserById(id: string) {
  users = users.filter(({ id: userId }) => userId != id);
}

export function createUser(user: User) {
  count++;
  return users.push({
    ...user,
    id: `${count}`,
  });
}


export function getUserByEmail(email: string) {
  return users.find(({ email: userEmail }) => userEmail == email);
}
