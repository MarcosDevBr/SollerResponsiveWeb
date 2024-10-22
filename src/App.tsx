import { light } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import MainRoutes from './routes/Routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={light}>
        <GlobalStyle />
        <MainRoutes/>
    </ThemeProvider>
  )
}

export default App
