import { ThemeProvider } from 'styled-components'
import './App.css'
import GlobalStyles from './Components/styles/Global'
import Header from './Components/Header'



function App() {

const theme = {
  color: "#d6d9db",
  background: "black"
}

  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
        <Header />
        </>
      </ThemeProvider>
  )
}

export default App
