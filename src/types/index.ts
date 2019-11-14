import { Main } from './homepageTypes';

export interface HomePageProps {
  location: {
    pathName: string
  }
  data: {
    prismic: {
      allHomepagess: {
        edges: Array<{
          node: Main
        }>
      }
    }
  }
}

export enum Pill {
  TECH = "Tech",
  NEWS = "News",
  BLOG = "Blog",
  TUTORIAL = "Tutorial",
  GATSBY = "Gatsby",
  REACT = "React",
  REACT_NATIVE = "React Native",
  REDUX = "Redux",
}

export enum ColorThemesPill {
  react = "#61dafb",
  tech = "#EA4C89",
  news = "#FBB03B",
}
