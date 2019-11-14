export interface HomePage {
  Main: Main
}

export interface Main {
  firsttitle: Title[]
  text: Text
  secondtitle: Title[]
  skills: Skills
  thirdtitle: Title[]
  sideprojects: Array<PurpleFields>
  fourthtitle: Title[]
  designprojects: Array<PurpleFields>
  fifthtitle: Title[]
}

export interface Projects {
  type: string
  config: DesignprojectsConfig
}

export interface DesignprojectsConfig {
  fields: PurpleFields
  label: string
}

export interface PurpleFields {
  image: Image
  title: Title[]
  subtitle: Title[]
  link: any
}

export interface Image {
  alt: null
  copyright: null
  dimensions: {
    height: number
    width: number
  }
  url: string
}

export interface ImageConfig {
  constraint: Constraint
  thumbnails: any[]
  label: string
}

export interface Constraint {}

export interface Link {
  type: string
  config: LinkConfig
}

export interface LinkConfig {
  label: string
}

export interface Text {
  type: string
  config: TextConfig
}

export interface TextConfig {
  multi: string
  label: string
}

export interface Title {
  spans: [] | any
  text: string
  type: string
}

export interface FifthtitleConfig {
  single: string
  label: string
}

export interface Skills {
  type: string
  config: SkillsConfig
}

export interface SkillsConfig {
  fields: FluffyFields
  label: string
}

export interface FluffyFields {
  image: Image
  text1: Text
}

export interface BlogPostNode {
  node: {
    pill: string
    title: Title[]
    date: Title[]
    image: Image
    text?: Array<any> | any
  }
}
