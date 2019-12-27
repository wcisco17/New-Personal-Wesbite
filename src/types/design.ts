export interface Dimensions {
  width: number
  height: number
}

export interface Image {
  dimensions: Dimensions
  alt?: any
  copyright?: any
  url: string
}

export interface Link {
  _linkType: string
  url: string
}

export interface Title {
  type: string
  text: string
  spans: any[]
}

export interface Subtitle {
  type: string
  text: string
  spans: any[]
}

export interface Designproject {
  image: Image
  link: Link
  title: Title[]
  subtitle: Subtitle[]
}

export interface Node {
  designprojects: Designproject[]
}

export interface Edge {
  node: Node
}

export interface AllHomepagess {
  edges: Edge[]
}

export interface Prismic {
  allHomepagess: AllHomepagess
}

export interface Data {
  prismic: Prismic
}

export interface DesignProjectsRoot {
  data: Data
}
