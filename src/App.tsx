import { light } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Home from './pages/home'

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home/>
    </ThemeProvider>
  )
}

export default App
