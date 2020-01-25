export interface Image {
  alt: string
  url: string
}

export interface Title {
  text: string
}

export interface Subtitle {
  text: string
}

export interface Link {
  url: string
}

export interface Designproject {
  image: Image
  title: Title
  subtitle: Subtitle
  link: Link
}

export interface Firsttitle {
  text: string
}

export interface Fourthtitle {
  text: string
}

export interface Secondtitle {
  text: string
}

export interface Title2 {
  text: string
}

export interface Subtitle2 {
  text: string
}

export interface Link2 {
  url: string
}

export interface Image2 {
  url: string
}

export interface Sideproject {
  title: Title2
  subtitle: Subtitle2
  link: Link2
  image: Image2
}

export interface Image3 {
  alt: string
  url: string
}

export interface Text1 {
  text: string
}

export interface Skill {
  image: Image3
  text1: Text1
}

export interface Text {
  text: string
}

export interface Thirdtitle {
  text: string
}

export interface HomePageMainData {
  designprojects: Designproject[]
  firsttitle: Firsttitle
  fourthtitle: Fourthtitle
  secondtitle: Secondtitle
  sideprojects: Sideproject[]
  skills: Skill[]
  text: Text
  thirdtitle: Thirdtitle
}

export interface Node {
  data: HomePageMainData
}

export interface AllPrismicHomepages {
  nodes: Node[]
}

export interface HomePagesData {
  allPrismicHomepages: AllPrismicHomepages
}

export interface HomePageProps {
  data: HomePagesData
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
