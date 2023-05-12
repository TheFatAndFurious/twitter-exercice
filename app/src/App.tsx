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
  user1: {
    name: "Karim",
    userName: "@The menace",
    image: "https://www.parismatch.com/lmnr/f/webp/r/1144,763,FFFFFF,forcex,center-middle/img/var/pm/public/media/image/2022/03/18/16/1985GettyImagescouv.jpg?VersionId=rLNr_kuza9tM1dI_T1um4ra5Y58ySspK"
  },
  user2: {
    name: "Alexandre",
    userName: "@BackwardCap&Kebabs",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/07/20/55ad77e3add713143b4285dd_golf-tours-news-blogs-local-knowledge-assets_c-2014-01-colin-kaepernick-backwards-hat-thumb-300x271-109743.jpg.rend.hgtvcom.966.725.suffix/1588639728660.jpeg"
  }, 
  user3: {
    name: "Mila",
    user: "@chickenAintMeat",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Elmer_in_Rabbit_Fire_%281951%29.png"

  }
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
