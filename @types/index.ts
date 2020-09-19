import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type Genre = {
  id: string;
  name: string;
};

export type Actor = {
  id: number;
  profile_path: string;
  name: string;
  character: string;
};

export type Movie = {
  id: string;
  vote_average: number;
  poster_path: string;
  homepage: string;
  backdrop_path: string;
  title: string;
  release_date: string;
  overview: string;
  original_title: string;
  genres: Genre[];
};

export type RootStackParamList = {
  Main: undefined;
  MovieDescription: { movieId: String };
};

type ScreenRouteProp = RouteProp<RootStackParamList, "MovieDescription">;

type NavigationProp = StackNavigationProp<RootStackParamList>;

export type NavigationProps = {
  route?: ScreenRouteProp;
  navigation: NavigationProp;
};
