import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;