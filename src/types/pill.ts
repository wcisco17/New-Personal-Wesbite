export interface Text {
  text: string
}

export interface Title {
  text: string
}

export interface Image {
  alt: string
  url: string
}

export interface Date {
  text: string
}

export interface BlogPostDatas {
  text: Text
  title: Title
  image: Image
  date: Date
  pill: string
  keytext: string
}

export interface Node {
  data: BlogPostDatas
}

export interface AllPrismicBlogpost {
  nodes: Node[]
}

export interface PrismicData {
  allPrismicBlogpost: AllPrismicBlogpost
}

export interface BlogPostData {
  data: PrismicData
}
