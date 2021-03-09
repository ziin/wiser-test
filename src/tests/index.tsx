import { RenderOptions, render } from "@testing-library/react";
import React, { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import { StylesProvider } from "@styles";
import { Provider } from "react-redux";
import { store } from "@store";

// Providers
const WithStyles: React.FunctionComponent = ({ children }): ReactElement => (
  <StylesProvider>{children}</StylesProvider>
);

const WithStoreAndStyles: React.FunctionComponent = ({
  children,
}): ReactElement => (
  <Provider store={store}>
    <ToastContainer />
    <WithStyles>{children}</WithStyles>
  </Provider>
);

// helper function
const wrapperCreator = (Wrapper: React.FunctionComponent) => (
  ui: ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: Wrapper, ...options });

// renders
export const renderWithStyles = wrapperCreator(WithStyles);
const renderWithStylesAndStore = wrapperCreator(WithStoreAndStyles);

export * from "@testing-library/react";
export { renderWithStylesAndStore as render };
