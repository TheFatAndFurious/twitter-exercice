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

const user = {
  name: "Karim",
  userName: "@The menace",
  image: "https://www.parismatch.com/lmnr/f/webp/r/1144,763,FFFFFF,forcex,center-middle/img/var/pm/public/media/image/2022/03/18/16/1985GettyImagescouv.jpg?VersionId=rLNr_kuza9tM1dI_T1um4ra5Y58ySspK"
}

  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
        <Container>
        <Header user={user}/>
        <Main user={user}/>
          
        </Container>
        </>
      </ThemeProvider>
  )
}

export default App
