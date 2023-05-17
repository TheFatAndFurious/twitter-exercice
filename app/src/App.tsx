import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/Global";
import Header from "./Components/Header";
import { Container } from "./Components/styles/Container.styles";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
import AppContext, { Tweet, User, Trends } from "./Components/AppContext";
import { fetchTweets, fetchUsers, fetchTrends } from "./Components/api";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [trends, setTrends] = useState<Trends[]>([]);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("erreur"));

    fetchTweets()
      .then((data) => setTweets(data))
      .catch((error) => console.error("erreur"));

    fetchTrends()
      .then((data) => setTrends(data))
      .catch((error) => console.error("erratum"));
  }, []);

  const theme = {
    color: "#d6d9db",
    background: "black",
  };

  const user = {
    user1: {
      name: "Karim",
      userName: "@The menace",
      image:
        "https://www.parismatch.com/lmnr/f/webp/r/1144,763,FFFFFF,forcex,center-middle/img/var/pm/public/media/image/2022/03/18/16/1985GettyImagescouv.jpg?VersionId=rLNr_kuza9tM1dI_T1um4ra5Y58ySspK",
    },
    user2: {
      name: "Alexandre",
      userName: "@BackwardCap&Kebabs",
      image:
        "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/07/20/55ad77e3add713143b4285dd_golf-tours-news-blogs-local-knowledge-assets_c-2014-01-colin-kaepernick-backwards-hat-thumb-300x271-109743.jpg.rend.hgtvcom.966.725.suffix/1588639728660.jpeg",
    },
    user3: {
      name: "Mila",
      userName: "@chickenAintMeatAnyway",
      image:
        "https://imgr.cineserie.com/2019/01/un-spin-off-feminin-de-fast-amp-furious-en-developpement.jpg?imgeng=/f_jpg/cmpr_0/w_700/h_380/m_cropbox&ver=1",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppContext.Provider value={{ users, tweets, setTweets, trends }}>
          <GlobalStyles />
          <Container>
            <Header user={user} />
            <Main user={user} />
          </Container>
        </AppContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
