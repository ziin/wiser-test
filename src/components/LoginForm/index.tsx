import { useForm } from "react-hook-form";
import { AuthCredentials } from "@store/user/types";
import Button from "@components/Button";
import { Form, Label, Input, ErrorMessage } from "./styles";

type Props = {
  onSubmit(data: AuthCredentials): void;
  loading?: boolean;
};

export default function LoginForm({ onSubmit, loading = false }: Props) {
  const { register, handleSubmit, errors } = useForm<AuthCredentials>();

  return (
    <Form aria-label="login form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="text"
          id="email"
          name="email"
          aria-label="email"
          aria-describedby="email-error"
          aria-invalid={!!errors.email}
          placeholder="seuemail@mail.com"
          auto-complete="email"
          ref={register({
            required: "O e-mail é necessário;",
            // eslint-disable-next-line
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
          })}
        />

        {errors?.email && (
          <ErrorMessage id="email-error" htmlFor="email">
            {errors.email?.message ||
              (errors.email?.type === "pattern" && "Digite um e-mail válido;")}
          </ErrorMessage>
        )}
      </div>

      <div>
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          aria-label="password"
          aria-describedby="password-error"
          aria-invalid={!!errors.password}
          auto-complete="current-password"
          ref={register({
            required: "A senha é necessária;",
          })}
        />

        {errors?.password && (
          <ErrorMessage id="email-error" htmlFor="password">
            {errors.password?.message}
          </ErrorMessage>
        )}
      </div>

      <Button aria-label="submit" type="submit" disabled={loading}>
        {loading ? "Autenticando" : "Entrar"}
      </Button>
    </Form>
  );
}
