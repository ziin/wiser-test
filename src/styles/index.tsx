import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./global";
import { theme } from "./theme";
import { PropsWithRequiredChildren } from "@common/types";

export function StylesProvider({ children }: PropsWithRequiredChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  );
}
