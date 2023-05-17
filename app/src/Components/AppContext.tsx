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

export interface Trend {
  id: number;
  location: string;
  title: string;
  number: number;
}

type AppContextType = {
  users: User[];
  tweets: Tweet[];
  trends: Trend[];
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
};

const AppContext = createContext<AppContextType>({
  users: [],
  tweets: [],
  trends: [],
  setTweets: () => {},
});

export default AppContext;
