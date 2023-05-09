import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Components/styles/Global'
import Header from './Components/Header'
import { Container } from './Components/styles/Container.styles';
import Main from './Components/Main';


function App() {

const theme = {
  color: "#d6d9db",
  background: "black"
}

  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
        <Container>
        <Header />
        <Main />
          
        </Container>
        </>
      </ThemeProvider>
  )
}

export default App
