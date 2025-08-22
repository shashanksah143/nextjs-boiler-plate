import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

// Add providers if needed (e.g., Theme, Redux, Context providers, etc.)
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    // Add any providers here when your app grows
    // <ThemeProvider theme={theme}>
    //   <Provider store={store}>
    //     {children}
    //   </Provider>
    // </ThemeProvider>
    <>{children}</>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";
export { customRender as render };
