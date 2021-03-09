import { fetch } from "@utils/fetch";
import { AuthCredentials, User } from "@store/user/types";

export async function authenticate(credentials: AuthCredentials) {
  const { response } = await fetch<User[]>({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });

  const users = response?.data;

  if (!users || users.length === 0) {
    throw new Error("Erro interno. Tente mais tarde.");
  }
  // fake auth
  const user = users.find(
    (user) => user.email.toUpperCase() === credentials.email.toUpperCase()
  );

  if (!user) {
    // pick a random user to suggest its email
    const sortedUser = users[Math.floor(Math.random() * users.length)];
    throw new Error(`E-mail não encontrado. Tente esse: ${sortedUser.email}`);
  }

  return { data: user };
}
