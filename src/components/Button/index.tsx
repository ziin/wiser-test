import React from "react";
import * as S from "./styles";

type Button = Omit<JSX.IntrinsicElements["button"], "ref">;

export default function Button({ children, ...attrs }: Button) {
  return <S.Button {...attrs}>{children}</S.Button>;
}
