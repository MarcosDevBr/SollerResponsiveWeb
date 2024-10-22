import { light } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import MainRoutes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={light}>
        <MainRoutes/>
    </ThemeProvider>
  )
}

export default App
