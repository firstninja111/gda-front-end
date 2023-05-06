export type PracticeItem = {
  type: string
  display_name?: string
  summary?: string
  api_type?: string
  fields?: string[]
  html?: string
}

export type PracticeSingle = {
  id: number
  title: string
  cognitionType?: string
  isReadingMaterial?: boolean
  practice: PracticeItem[]
}
