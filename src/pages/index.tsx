import Head from "next/head";
import Image from "next/image";
import { Home as S } from "@styles/pages";
import LoginForm from "@components/LoginForm";
import useUser from "@hooks/useUser";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const { user, signIn } = useUser();

  // display an alert based on user auth status
  useEffect(() => {
    if (user.data) {
      toast.success(
        <>
          <p>Logado com sucesso!</p>
          <p>Bem vindo, {user.data.name}</p>
        </>,
        { autoClose: 2500 }
      );
    }

    if (user.error) {
      toast.error(user.error, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
      });
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Wiser Educação</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <S.Flex>
        <S.ImageRow>
          <S.ImageContainer>
            <S.Gradient />
            <Image
              src="/images/background.jpg"
              alt="Mulher usando um notebook"
              layout="fill"
              objectFit="cover"
              quality={100}
              objectPosition="top"
            />
          </S.ImageContainer>
        </S.ImageRow>

        <S.FormRow>
          <S.FormContainer>
            <h1>
              Olá, seja
              <br /> bem-vindo!
            </h1>

            <p>Para acessar a plataforma, faça seu login.</p>

            <LoginForm onSubmit={signIn} loading={user.isLoading} />

            <p>
              Esqueceu seu login ou senha? <br /> Clique <a href="#">aqui</a>
            </p>
          </S.FormContainer>
        </S.FormRow>
      </S.Flex>
    </>
  );
}
