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
  url: string
}

export interface Subtitle {
  type: string
  text: string
  spans: any[]
}

export interface Title {
  type: string
  text: string
  spans: any[]
}

export interface Designproject {
  image: Image
  link: Link
  subtitle: Subtitle[]
  title: Title[]
}

export interface DesignNode {
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

export interface DesignProject {
  data: Data
}
