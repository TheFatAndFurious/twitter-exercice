import { createContext } from "react";

export interface User {
  userName: string;
  id: number;
  name: string;
  username: string;
  image: string;
}

export interface Tweet {
  id: number;
  user: User;
  body: string;
  image: string;
}

type AppContextType = {
  users: User[];
  tweets: Tweet[];
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
};

const AppContext = createContext<AppContextType>({
  users: [],
  tweets: [],
  setTweets: () => {},
});

export default AppContext;
