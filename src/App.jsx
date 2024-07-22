import "normalize.css";
import { theme } from "./style/theme/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style/global/globalStyle";
import BaseLayout from "./components/layout/BaseLayout";
import Dashboard from "./screens/dashboard/DashboardScreen";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
