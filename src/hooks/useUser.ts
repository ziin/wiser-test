import { useAppDispatch, useTypedSelector } from "@store";
import { authLogout, authRequest, AuthCredentials } from "@store/user";

export default function useUser() {
  const { user } = useTypedSelector((state) => state);
  const dispatch = useAppDispatch();

  return {
    user,
    signIn: (credentials: AuthCredentials) =>
      dispatch(authRequest(credentials)),
    logout: () => dispatch(authLogout()),
  };
}
